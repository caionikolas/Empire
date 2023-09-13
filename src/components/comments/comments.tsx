import { Lilita_One  } from 'next/font/google'
import user from './../../assets/images/user.svg'

const lilitaOne = Lilita_One({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lilitaOne'
   })

import "./comments.css"
import Image from 'next/image'

export default function Comments(){
    return (
        <div id="comments">
            <h2 className={lilitaOne.className}>Nossa realeza</h2>
            <p>A satisfação de nossos clientes em primeiro lugar!</p>
            <div className="commnets-user">
                <div className="comment">
                    <div className="-comment-user">
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin.”</p>
                        <div className="user">
                            <Image
                                src={user}
                                alt='icone de usuário'
                            />
                            <div className="user-name">
                                <h4 className={lilitaOne.className}>Carla gomes</h4>
                                <h5>23 Anos • Designer</h5>
                            </div>
                        </div>
                    </div>
                </div>
 
            </div>
        </div>
    )
}