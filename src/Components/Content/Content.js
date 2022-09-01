import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../../store/Context'
import { PostContext } from '../../store/PostContext'
import './Content.css'
function Content() {

    const { firebase } = useContext(FirebaseContext)
    const [products, setProducts] = useState([])
    const { setPostDetails } = useContext(PostContext)
    const history = useHistory()
    useEffect(() => {
        firebase.firestore().collection('products').get().then((snapshot) => {
            const allPost = snapshot.docs.map((product) => {
                return {
                    ...product.data(),
                    id: product.id
                }
            })
            setProducts(allPost)
        })
    })

    return (
        <section>

            <img className="bg" src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/516b7b030add52ce.jpg?q=50" />

            <h3 className='rec'>Quick Menu</h3>

            {products.map(product => {
                return <div onClick={() => {
                    setPostDetails(product)
                    history.push('/view')
                }} className='cards'>
                    <div className="card">
                        <img className='prod' src={product.url} alt="Denim Jeans" />
                        <h1>{product.name}</h1>
                        <p className="price">{product.price}</p>
                        <p>{product.category}</p>
                        <p>{product.createdAt}</p>

                    </div>
                </div>
            })

            }
        </section>
    )
}

export default Content
