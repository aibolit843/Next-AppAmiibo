import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Head from "next/head"
import { useRouter } from 'next/router'


interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  
  const router = useRouter()
  return (
 
    <div className="app">
      <Head>
      </Head>
      <button className="button" type="button" onClick={() => router.push('/infochar')}>
        Search Amiibo
      </button>
      <Header />
      <main className="main">
        <ProductList products={props.products}/>
      </main>
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch("https://www.amiiboapi.com/api/amiibo")
  .then(res => res.json())
  .catch(err => {
    console.error(err);
  });
  return {
    products: res.amiibo
  };
};


export default Index