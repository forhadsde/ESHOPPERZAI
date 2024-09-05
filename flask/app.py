from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/recommend', methods=['GET'])
def recommend():
    product_id = request.args.get('product_id', type=int)
    df = pd.read_csv('product.csv')
    product_row = df[df['Id'] == product_id]

    if product_row.empty:
        return jsonify({'error': 'Product not found'}), 404

    try:
        product_type = product_row['Type'].iloc[0]
        if pd.isna(product_type):
            return jsonify({'error': 'Product type is missing'}), 400

        # Fetch the IDs of products with the same type, excluding the current product
        recommendations = df[(df['Type'] == product_type) & (df['Id'] != product_id)]['Id'].head(4).tolist()
        return jsonify(recommendations)
    except Exception as e:
        app.logger.error(f'Error processing recommendation: {str(e)}')
        return jsonify({'error': 'Failed to process recommendations'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)

