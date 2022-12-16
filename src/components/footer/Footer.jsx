import style from './footer.module.css'
const Footer = () =>{
	return(
		<footer>
			<div className={style.logo}>STORE</div>			<p>Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. 
			<br/>
         <br/>
			Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum. 
			</p>
		</footer>
	)
}
export default Footer