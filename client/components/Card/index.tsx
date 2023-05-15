import Image from "next/image"
import { ProductsType } from "../../pages/product/context/ProductCart.types"
import styles from "./Card.module.scss"

type CardProps = {
  product: ProductsType
}

const Card: React.FC<CardProps> = ({ product }) => {
  console.log(product)
  return (
    <div>
      <div className={styles.card}>
        <Image
          className={styles.image}
          src={product.product.img_url}
          alt={product.product.name}
          width={100}
          height={100}
        />
        <div>
          <p>{product.product.name}</p>
          <p className={styles.productDetails}>Quantity: {product.amount}</p>
          <p className={styles.productDetails}>£{product.amount * product.product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
