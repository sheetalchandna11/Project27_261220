class Roof
{
	constructor(x, y, width, height) {
		var options={
		   isStatic:true			
		}

		this.x = x;
		this.y = y;
		this.w = width
		this.h = height

		this.body = Bodies.rectangle(x, y, width, height, options);
 		World.add(world, this.body);

	}
	display() {
			
			var roofpos = this.body.position;		

			push()
			translate(roofpos.x, roofpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			stroke(33, 34, 38);
			fill(52, 56, 64);
			rect(0, 0, this.w, this.h);
			pop()
			
	}

}