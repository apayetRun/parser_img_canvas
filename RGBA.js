
class RGBA
{
	constructor(p_px_linear_pos)
	{
		this.px_linear_pos = p_px_linear_pos;
		this.red = 0;
		this.green = 0;
		this.blue = 0;
		this.alpha = 0;
		this.img_width = undefined;
		this.img_heigth = undefined;
		this.matrix_posx = undefined;
		this.matrix_posy = undefined;
	}

	set_px_color(px_pos, red, green, blue, alpha)
	{
		if (px_pos !== this.px_linear_pos)
		{
			console.error("Pixel pos has not be setted properly");
			return ;
		}
		else
		{
			this.px_linear_pos = px_pos;
			this.red = red;
			this.green = green;
			this.blue = blue;
			this.alpha = alpha;
		}
	}
	
	set_img_ref(width, height)
	{
		this.img_heigth = height;
		this.img_width = width;
	}

}