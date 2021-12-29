class Reduced_matrix
{
	constructor(px_linear_pos)
	{
		this.px = px_linear_pos;
		this.x = undefined;
		this.y = undefined;
		this.value = undefined;
	}

	set_value(posx, posy, value)
	{
		this.x = posx;
		this.y = posy;
		this.value = value;
	}
}