import {withRouter, Router} from 'next/router'

  export interface IProduct {
    amiiboSeries: string
    image: string
    name: string
  }
 
  interface IProductProps {
    product: IProduct
    router: Router
  }

const Product = (props: IProductProps) => {
  return (
    <div className="product">
      <h1 className="product__title">{props.product.name}</h1>
      <h1 className="product__description">{props.product.amiiboSeries}</h1>
      <img src={props.product.image} alt="image" className="product__image"/>
    </div>
  )
}

export default withRouter(Product)