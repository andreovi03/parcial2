export async function traer_cat() {
	try {
			const cat = await fetch('https://api.chucknorris.io/jokes/categories').then((res) => {
				return res.json();
			});
			console.log(cat)
            return cat;
	} catch (error) {
		console.log(error);
	}
}

export async function traer_jok() {
	try {
			const jok = await fetch('https://api.chucknorris.io/jokes/random?category={category}').then((res) => {
				return res.json();
			});
			console.log(jok)
            return jok;
	} catch (error) {
		console.log(error);
	}
}