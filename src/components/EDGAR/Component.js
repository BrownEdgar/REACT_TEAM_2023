import React from 'react'

import style from "./Component.module.css";

export default function Component({ children }) {

	return (
		<div className={style.box}>

			{children}

		</div>
	)
}
