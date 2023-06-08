<div>
	<slot>empty</slot>
</div>

<style>
	div {
		display: flex;
		flex-direction: var(--direction, row);
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
</style>
