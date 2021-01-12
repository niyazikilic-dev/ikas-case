import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBasketItem } from '../action/basket';
import { MdErrorOutline } from 'react-icons/md';
import { MdShoppingBasket } from 'react-icons/md';
const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);

  const taxCalc = (basketItems) => {
    let taxTotal = basketItems.reduce((acc, item) => {
      return acc + (item.price * item.quantity * item.tax) / 100;
    }, 0);

    return taxTotal.toFixed(2);
  };

  const totalCalc = (basketItems) => {
    let total = basketItems.reduce((acc, item) => {
      return (
        acc +
        item.price * item.quantity +
        (item.price * item.quantity * item.tax) / 100
      );
    }, 0);

    return total;
  };

  return (
    <div className='basket-list-main'>
      {basketItems.length > 0 ? (
        <div className='overflow-list'>
          {basketItems.map((item) => (
            <div className='basket-list-items'>
              <div className='basket-items-flex'>
                <div className='basket-img-main'>
                  <img src={item.productImage} alt='' />
                  {item.quantity > 1 && (
                    <span className='basket-items-quantity'>
                      {item.quantity}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '20px',
                    flexGrow: 1,
                    flexBasis: 1,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span className='basket-product-name'>
                      {item.productName}
                    </span>
                    <span className='basket-product-price'>₺{item.price}</span>
                  </div>
                  <div className='basket-product-info-main'>
                    <span className='basket-product-sku'>{item.sku}</span>
                    {item.stockQuantity === 0 && (
                      <span className='basket-product-stock-status'>
                        <MdErrorOutline style={{ marginRight: '5px' }} /> Stokta
                        yok
                      </span>
                    )}

                    {item.properties !== null && (
                      <div className='basket-product-properties'>
                        {item.properties.map((prop) => (
                          <span>{prop.property}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div
                onClick={() => dispatch(deleteBasketItem(item.id))}
                className='basket-delete-btn'
              >
                <span style={{ color: '#fff', fontSize: '16px' }}>Sil </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='empty-basket'>
          <span>
            <MdShoppingBasket style={{ color: '#dfe7ee', fontSize: '120px' }} />
          </span>
          <span style={{ color: '#dfe7ee' }}>
            Satışa başlamak için ürün ekleyin
          </span>
        </div>
      )}

      {basketItems.length > 0 && (
        <div className='checkout-main'>
          <div className='tax-main'>
            <span>Vergiler</span>
            <span>₺{taxCalc(basketItems)}</span>
          </div>
          <div className='checkout-btn-main'>
            <span className='icon'>₺</span>
            <div className='checkout'>
              <span>Ödeme</span>
              <span>₺{totalCalc(basketItems).toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
