import React, { useEffect } from 'react';
import ProductList from './ProductList';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { fetchFilters, fetchProductsAsync, productSelectors, setPageNumber, setProductParams } from './homeSlice';
import { Grid, Paper, Typography, Box } from '@mui/material';
import ProductSearch from './ProductSearch';
import RadioButtonGroup from '../../app/components/RadioButtonGroup';
import CheckboxButtons from '../../app/components/CheckboxButtons';
import AppPagination from '../../app/components/AppPagination';

const sortOptions = [
    { value: 'name', label: 'Alphabetical' },
    { value: 'priceDesc', label: 'Price - High to Low' },
    { value: 'price', label: 'Price - Low to High' },
];

const Home: React.FC = () => {
    const products = useAppSelector(productSelectors.selectAll);
    const { productsLoaded, filtersLoaded, types, brands, productParams, metaData } = useAppSelector(state => state.home);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [dispatch, productsLoaded]);

    useEffect(() => {
        if (!filtersLoaded) dispatch(fetchFilters());
    }, [dispatch, filtersLoaded]);

    if (!filtersLoaded) return <LoadingComponent message='Loading products...' />;

    return (
        <Grid container spacing={4}>
            {/* Filters Sidebar */}
            <Grid item xs={12} md={3}>
                <Paper sx={{ padding: 3, mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Search Products
                    </Typography>
                    <ProductSearch />
                </Paper>
                <Paper sx={{ padding: 3, mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Sort By
                    </Typography>
                    <RadioButtonGroup
                        selectedValue={productParams.orderBy}
                        options={sortOptions}
                        onChange={(e) => dispatch(setProductParams({ orderBy: e.target.value }))}
                    />
                </Paper>
                <Paper sx={{ padding: 3, mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Brands
                    </Typography>
                    <CheckboxButtons
                        items={brands}
                        checked={productParams.brands}
                        onChange={(items: string[]) => dispatch(setProductParams({ brands: items }))}
                    />
                </Paper>
                <Paper sx={{ padding: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Product Types
                    </Typography>
                    <CheckboxButtons
                        items={types}
                        checked={productParams.types}
                        onChange={(items: string[]) => dispatch(setProductParams({ types: items }))}
                    />
                </Paper>
            </Grid>
            {/* Products List */}
            <Grid item xs={12} md={9}>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        Our Products
                    </Typography>
                </Box>
                <ProductList products={products} />
                {/* Pagination */}
                <Box sx={{ mt: 3 }}>
                    {metaData &&
                        <AppPagination 
                            metaData={metaData}
                            onPageChange={(page: number) => dispatch(setPageNumber({pageNumber: page}))}
                        />}
                </Box>
            </Grid>
        </Grid>
    );
};

export default Home;
