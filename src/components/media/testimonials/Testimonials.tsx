
const Testimonials = () => {
  return (
    <div>
        <section className="bg-gray-100 text-gray-800">
	<div className="container px-6 py-12 mx-auto">
		<div className="grid items-center gap-4 xl:grid-cols-5">
			<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
			<div className="font-semibold  text-4xl mx-auto text-center mb-5">
        Our <h2 className="text-4xl text-[#946405] font-bold"> Achievements</h2>
      </div>
				
				<p className="dark:text-gray-600 text-center font-semibold">
	Over the years, we’ve dedicated ourselves to excellence and innovation,
	 reaching key milestones and setting industry benchmarks. From receiving prestigious awards to expanding our global footprint,
	  our achievements are a testament to the commitment, passion, and hard work of our talented team.
	 
</p>
</div>
			<div className="p-6 xl:col-span-3">
				<div className="grid gap-4 md:grid-cols-2">
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md dark:bg-gray-50">
							<img src="https://res.cloudinary.com/diecfwnp9/image/upload/v1730143310/ku12aecc86apydun83lx.jpg" alt="" />
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-50">
							<img src="https://res.cloudinary.com/diecfwnp9/image/upload/v1730143311/awf37l1dvkanjjxyyv36.jpg" alt="" />
						</div>
					</div>
					<div className="grid content-center gap-4">
						<div className="p-6  w-[90%] h-[90%]  rounded shadow-md dark:bg-gray-50">
							<img className=" h-[100%] w-[110%]" 
							src="https://res.cloudinary.com/diecfwnp9/image/upload/v1730143309/kkik3zch8xm6l4jlggst.jpg" alt="" />
						</div>
						<div className="p-6 w-[90%] h-[90%]  rounded shadow-md dark:bg-gray-50">
							<img className=" h-[100%] w-[110%]" 
							src="https://res.cloudinary.com/diecfwnp9/image/upload/v1730143309/cd7axihqwbeftmttfeoa.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Testimonials