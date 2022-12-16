import style from './about.module.css'

const About = () => {
	return(
		<div className={style.text_section}>
			<h2>
				О нас
			</h2>
			<p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
			</p>
         <p>В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. 
			</p>
		</div>
	)
}
export default About