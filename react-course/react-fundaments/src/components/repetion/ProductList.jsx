import './ProductList.css'
import products from '../../data/products'

export default props => {
  return(
    <table style={{width: '100%'}} >
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Priece</th>
        </tr>
      </thead>
      {products.map((product, index) => {
        return(
          <tbody key={product.id} className={index % 2 == 0 ? 'Par' : ''}>
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.priece.toFixed(2)}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}