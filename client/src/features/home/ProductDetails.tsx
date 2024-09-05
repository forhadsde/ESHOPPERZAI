import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography, Card, CardContent, CardMedia, Button, CircularProgress } from '@mui/material';
import { useState, useEffect, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../../app/errors/NotFound';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { LoadingButton } from '@mui/lab';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { addBasketItemAsync, removeBasketItemAsync } from '../basket/basketSlice';
import { fetchProductAsync, productSelectors } from './homeSlice';
import agent from '../../app/api/agent';
import { Product } from '../../app/models/product';

export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const product = useAppSelector(state => productSelectors.selectById(state, id!));
    const [quantity, setQuantity] = useState(0);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [loadingRelated, setLoadingRelated] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!product) {
            dispatch(fetchProductAsync(parseInt(id)));
        }
    }, [id, product, dispatch]);

    useEffect(() => {
        if (product) {
            fetchRelatedProducts(product.id);
        }
    }, [product]);

    const fetchRelatedProducts = async (productId: number) => {
        setLoadingRelated(true);
        try {
            const idsResponse = await agent.flask.fetchRelatedProductIds(productId);
            if (idsResponse && Array.isArray(idsResponse)) {
                const products = await Promise.all(idsResponse.map(id => agent.home.details(id)));
                setRelatedProducts(products);
            } else {
                setRelatedProducts([]);
                setError('No related products found');
            }
        } catch (err) {
            console.error('Error fetching related products:', err);
            setError('Error fetching related products');
        } finally {
            setLoadingRelated(false);
        }
    };

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.currentTarget.value, 10);
        setQuantity(value >= 0 ? value : 0);
    }

    function handleUpdateCart() {
        if (!product) return;
        const updatedQuantity = !item || quantity > item.quantity ? quantity : item.quantity - quantity;
        const action = updatedQuantity > 0 ? addBasketItemAsync : removeBasketItemAsync;
        dispatch(action({ productId: product.id, quantity: Math.abs(updatedQuantity) }));
    }

    if (!product) return <LoadingComponent message='Loading product...' />
    if (error) return <NotFound message={error} />

    return (
        <>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <img src={product.pictureUrl} alt={product.name} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h3'>{product.name}</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant='h4' color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
                    <TableContainer>
                        <Table>
                            <TableBody sx={{ fontSize: '1.1em' }}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell>{product.type}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Brand</TableCell>
                                    <TableCell>{product.brand}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Quantity in stock</TableCell>
                                    <TableCell>{product.quantityInStock}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                onChange={handleInputChange}
                                variant={'outlined'}
                                type={'number'}
                                label={'Quantity in Cart'}
                                fullWidth
                                value={quantity}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <LoadingButton
                                disabled={quantity === 0}
                                loading={loadingRelated}
                                onClick={handleUpdateCart}
                                sx={{ height: '55px' }}
                                color={'primary'}
                                size={'large'}
                                variant={'contained'}
                                fullWidth>
                                {quantity > 0 ? 'Update Quantity' : 'Add to Cart'}
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Related Products Section */}
            <Typography variant="h5" sx={{ mt: 4 }}>Recommended Products</Typography>
            {loadingRelated ? (
                <CircularProgress />
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                <Grid container spacing={2}>
                    {relatedProducts.map(relatedProduct => (
                        <Grid item xs={12} sm={6} md={3} key={relatedProduct.id}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={relatedProduct.pictureUrl}
                                    alt={relatedProduct.name}
                                />
                                <CardContent>
                                    <Typography variant="h6">{relatedProduct.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {relatedProduct.description}
                                    </Typography>
                                    <Typography variant="h6" color="secondary">
                                        ${(relatedProduct.price / 100).toFixed(2)}
                                    </Typography>
                                    <Button
                                        size="small"
                                        color="primary"
                                        component={'a'}
                                        href={`/home/${relatedProduct.id}`} // Navigate to the product detail page
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
}
