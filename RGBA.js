
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
	
	check_non_color_data()
	{
		if (this.green != this.red || this.green != this.blue 
			|| this.red != this.blue)
		{
			this.red = undefined;
			this.green = undefined;
			this.blue = undefined;
			console.error("The image contains color data ! This is not expected, please convert the image into black and white pure color");

		}
	}

	set_img_ref(width, height)
	{
		this.img_heigth = height;
		this.img_width = width;
	}

	set_posx()
	{	
		this.matrix_posx = this.px_linear_pos % this.img_width;
	}

	set_posy()
	{
		let	temp;
		let	y;
	
		y = 0;
		temp = 0;
		if (this.px_linear_pos < this.img_width)
			this.matrix_posy = 0;
		// else if (this.px_linear_pos == this.img_width)
		// 	this.matrix_posy = 1;
		else
		{
			while (temp < this.px_linear_pos)
			{
				temp += this.img_width;
				y++;
			}
			if (!(this.px_linear_pos % this.img_width))
				y = y + 1;
			this.matrix_posy = y - 1;
		}
	}                                                     
}