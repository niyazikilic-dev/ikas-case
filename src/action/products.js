import { GET_PRODUCTS } from './types';

export const getProducts = () => async (dispatch) => {
  const products = [
    {
      id: 2,
      price: 359,
      tax: 18,
      productName: 'Nike Ayakkabı Model 1',
      stockQuantity: 0,
      productImage:
        'https://www.searchpng.com/wp-content/uploads/2019/01/Nike-Shoe-PNG.png',
      properties: [
        {
          id: 1,
          property: 'Kırmızı - Beyaz',
        },
        {
          id: 2,
          property: '43',
        },
      ],
      sku: 'ZK8756KHH0192-TR',
    },
    {
      id: 3,
      price: 759,
      tax: 18,
      productName: 'Nike Siyah Sırt Çantası - Nike Siyah Sırt Çantası ',
      productImage:
        'https://freepikpsd.com/wp-content/uploads/2019/10/nike-transparent-backpack-Transparent-Images.png',
      stockQuantity: 3,
      properties: null,
      sku: 'MI8756KHH2922-TR',
    },
    {
      id: 4,
      price: 959,
      tax: 18,
      productName: 'Pembe Sırt Çantası',
      stockQuantity: 10,
      productImage:
        'https://cdn-ss.akinon.net/products/2019/05/15/144421/eb9bed6a-37ec-46e0-855b-f2e158582add.jpg',
      properties: [
        {
          id: 1,
          property: 'Medium',
        },
        {
          id: 2,
          property: 'Pembe',
        },
      ],
      sku: 'PM8756KHH0122-TR',
    },
    {
      id: 5,
      price: 960,
      tax: 18,
      productName: 'Yeşil Sırt Çantası',
      stockQuantity: 10,
      productImage:
        'https://cdn-ss.akinon.net/products/2019/07/08/221862/5e391ca4-993b-435c-8684-4276e3164080_size1400x1400_quality85_cropCenter.jpg',
      properties: [
        {
          id: 1,
          property: 'Small',
        },
        {
          id: 2,
          property: 'Yeşil',
        },
      ],
      sku: 'YS3756KHH0122-TR',
    },
    {
      id: 6,
      price: 700,
      tax: 18,
      productName: 'Sarı Sırt Çantası',
      stockQuantity: 10,
      productImage:
        'https://cdn-ss.akinon.net/products/2018/08/13/144414/29dbd929-4423-471e-b336-18b2d752caca_size1400x1400_quality85_cropCenter.jpg',
      properties: [
        {
          id: 2,
          property: 'Sarı',
        },
      ],
      sku: 'SR8756KHH0122-TR',
    },
    {
      id: 7,
      price: 565,
      tax: 18,
      productName: 'Kahverengi Sırt Çantası',
      stockQuantity: 10,
      productImage:
        'https://n11scdn.akamaized.net/a1/1024/spor-outdoor/outdoor-canta/fjallraven-kanken-classic-brown-klasik-kahve__1498098068142395.jpg',
      properties: [
        {
          id: 1,
          property: 'Kahverengi',
        },
        {
          id: 2,
          property: 'Large',
        },
      ],
      sku: 'KR8756KHH0122-TR',
    },
    {
      id: 8,
      price: 533,
      tax: 18,
      productName: 'Siyah - Beyaz Nike Ayakkabı',
      stockQuantity: 10,
      productImage:
        'https://cdn-ss.akinon.net/products/2019/11/22/176133/5f94a5dd-c875-4858-8f9a-fed16b5e74fb.jpg',
      properties: [
        {
          id: 1,
          property: 'Siyah',
        },
        {
          id: 2,
          property: 'Beyaz',
        },
      ],
      sku: 'SB8756KHH0122-TR',
    },
    {
      id: 9,
      price: 1300,
      tax: 18,
      productName: 'Beyaz Ayakkabı',
      stockQuantity: 10,
      productImage:
        'https://www.aremspor.com.tr/UserFiles/ProductImages/0/aq1773/orj/nike-ebernon-mid-erkek-ayakkabi-100-68572.jpg',
      properties: [
        {
          id: 1,
          property: 'Beyaz',
        },
        {
          id: 2,
          property: '38',
        },
      ],
      sku: 'KB8746KHH0122-TR',
    },
    {
      id: 10,
      price: 1888,
      tax: 18,
      productName: 'Siyah Sırt Çantası',
      stockQuantity: 10,
      productImage:
        'https://herschel.eu/content/dam/herschel/products/10500/10500-00001-OS_01.jpg',
      properties: [
        {
          id: 1,
          property: 'Siyah',
        },
      ],
      sku: 'SSC8756KHH0122-TR',
    },
    {
      id: 1,
      price: 888,
      tax: 18,
      productName: 'Nike El Çantası',
      stockQuantity: 5,
      productImage:
        'https://www.4sportsgroup.com/userfiles/lg_images/Nike-Club-Team-Roller-Bag.png',
      properties: [
        {
          id: 1,
          property: 'Siyah',
        },
        {
          id: 2,
          property: 'XL',
        },
      ],
      sku: 'BSC8756KHH0122-TR',
    },
  ];

  try {
    dispatch({
      type: GET_PRODUCTS,
      payload: products,
    });
  } catch (error) {}
};
