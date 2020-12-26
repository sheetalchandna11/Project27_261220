class Bob {
	constructor(x,y,radius) {
		var options = {
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
		}

		this.x = x;
		this.y = y;
		this.r = radius;
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display() {
			
			var ballpos = this.body.position;
			
			push()
			translate(ballpos.x, ballpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(243, 109, 168)
			stroke(135, 31, 120)
			ellipse(0, 0, this.r, this.r);
			pop()
			
	}

}

