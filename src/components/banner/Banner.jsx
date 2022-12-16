import style from './banner.module.css'
const Banner = () => {
   return(
      <div className={style.banner_section}>

		

         <div className={style.banner}>
            <p className={style.text_banner}>У нас лучшие цены 
            <br /> 
            <span>на все смартфоны</span>
            <br />
            <button className={style.banner_btn}>Купить iPhone</button>
            </p>
         </div>
      </div>
   )
}

export default Banner