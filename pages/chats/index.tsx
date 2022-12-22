import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "../../components/SearchBar";

const index = () => {
	return (
		<div className="relative">
			<div className="flex h-screen">
				<aside className="w-64 h-screen border-solid border border-dark-tint bg-white">
					<div className="py-8 px-2">
						<SearchBar />
					</div>
					<div className="flex flex-col h-5/6 overflow-y-auto">
						<div className="flex flex-col gap-2">
							<Link passHref href={"/chats/details"}>
								<div className="py-3 text-xs  font-medium hover:bg-primary-tint px-2 cursor-pointer">
									<div className="flex flex-row gap-2 items-center">
										<div className="relative h-8 w-8 ">
											<Image
												alt={"logo"}
												src={"/images/cover.jpg"}
												fill
												objectFit="cover"
												className="brightness-75 opacity-90 rounded-full"
											></Image>
										</div>
										<div>John Doe</div>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</aside>
				<main className="overflow-y-scroll h-screen flex-1 bg-primary-tint flex justify-center md:pt-10">
					<div className="md:w-3/4  xl:w-1/2 w-full border border-solid border-dark-tint rounded-md bg-white flex flex-col  ">
						<div className="py-3 text-xs  font-medium px-2 cursor-pointer border-b border-solid border-dark-tint">
							<div className="flex flex-row gap-2 items-center">
								<div className="relative h-8 w-8 ">
									<Image
										alt={"logo"}
										src={"/images/cover.jpg"}
										fill
										objectFit="cover"
										className="brightness-75 opacity-90 rounded-full"
									></Image>
								</div>
								<div>John Doe</div>
							</div>
						</div>
						<div className="flex-1 overflow-y-scroll p-4">
							<div className="flex flex-col gap-6">
								<div className="w-fit p-4 bg-primary shadow-md rounded-xl text-white text-xs ">
									<p className=" rounded-full">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Ex qui numquam culpa
										iusto ipsum incidunt minus, ullam ipsam,
										dolore odio similique aspernatur porro
										distinctio magni, cumque ducimus
										voluptate accusamus ipsa?
									</p>
								</div>
								<div className="w-fit p-4 bg-primary shadow-md rounded-xl text-white text-xs ">
									<p className=" rounded-full">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
								</div>
								<div className="w-fit p-4 bg-primary-tint shadow-md rounded-xl text-secondary text-xs self-end">
									<p className=" rounded-full">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
								</div>
								<div className="w-fit p-4 bg-primary shadow-md rounded-xl text-white text-xs ">
									<p className=" rounded-full">
										Lorem ipsum dolor sit amet, Asperiores
										illum, ex omnis consequuntur voluptate
										nesciunt nulla deserunt fugit.
									</p>
								</div>
								<div className="w-fit p-4 bg-primary-tint shadow-md rounded-xl text-secondary text-xs self-end">
									<p className=" rounded-full">...</p>
								</div>
								<div className="w-fit p-4 bg-primary-tint shadow-md rounded-xl text-secondary text-xs self-end">
									<p className=" rounded-full">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Fuga libero omnis ab
										in veritatis. Magnam voluptas neque,
										consequuntur corrupti deleniti, animi
										cum qui soluta reprehenderit voluptates
										fuga incidunt quod labore.
									</p>
								</div>
								<div className="w-fit p-4 bg-primary-tint shadow-md rounded-xl text-secondary text-xs self-end">
									<p className=" rounded-full">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
								</div>
								<div className="w-fit p-4 bg-primary-tint shadow-md rounded-xl text-secondary text-xs self-end">
									<p className=" rounded-full">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Fuga libero omnis ab
										in veritatis..
									</p>
								</div>
								<div className="w-fit p-4 bg-primary shadow-md rounded-xl text-white text-xs ">
									<p className=" rounded-full">
										Lorem ipsum dolor sit amet, Asperiores
										illum, ex omnis consequuntur voluptate
										nesciunt nulla deserunt fugit.
									</p>
								</div>
								<div className="w-fit p-4 bg-primary-tint shadow-md rounded-xl text-secondary text-xs self-end">
									<p className=" rounded-full">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
								</div>
							</div>
						</div>
						<div className="p-4">
							<form action="" className="flex flex-row gap-4">
								<input type="text" />
								<div className="py-2 px-3 cursor-pointer bg-primary rounded-full"><i className="icon-forward text-white "></i></div>
							</form>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default index;