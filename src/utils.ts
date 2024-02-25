export async function fetchData(url: string) {
	const result = await fetch(url);
	const data = await result.json();

	return data;
}