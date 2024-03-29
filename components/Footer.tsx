import React, { Fragment } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
const Footer = () => {
	const { t } = useTranslation(["home"]);
	return (
		<footer className="w-full relative bg-secondary text-white">
			<div className="w-full container sm:mx-auto  md:px-10 px-6 py-16 lg:pt-10">
				<div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
					<div className="flex flex-col items-center md:items-start">
						<div>
							<Image
								alt={"logo"}
								src={"/images/user.svg"}
								width={60}
								height={50}
							></Image>
						</div>
						<div className="py-4 font-bold">
							{t("home:help-people")}
						</div>
						<div className="text-sm font-light text-center md:text-start">
							{t("home:help-people-desc")}
						</div>
					</div>

					<div className="flex flex-col items-center md:items-start">
						<div>
							<Image
								alt={"logo"}
								src={"/images/comments.svg"}
								width={60}
								height={50}
							></Image>
						</div>
						<div className="py-4 font-bold">
							{t("home:take-action")}
						</div>
						<div className="text-sm font-light text-center md:text-start">
							{t("home:take-action-desc")}
						</div>
					</div>
					<div className="flex flex-col items-center md:items-start">
						<div>
							<Image
								alt={"logo"}
								src={"/images/heart.svg"}
								width={60}
								height={50}
							></Image>
						</div>
						<div className="py-4 font-bold">{t("home:react")}</div>
						<div className="text-sm font-light text-center md:text-start">
							{t("home:react-desc")}
						</div>
					</div>
					<div className="flex flex-col items-center md:items-start">
						<div>
							<Image
								alt={"logo"}
								src={"/images/discussion.svg"}
								width={60}
								height={50}
							></Image>
						</div>
						<div className="py-4 font-bold">
							{t("home:charity")}
						</div>
						<div className="text-sm font-light text-center md:text-start">
							{t("home:charity-dec")}
						</div>
					</div>
					<div className="flex flex-col items-center md:items-start">
						<div>
							<Image
								alt={"logo"}
								src={"/images/circle.svg"}
								width={60}
								height={50}
							></Image>
						</div>
						<div className="py-4 font-bold">
							{t("home:crowdfunding")}
						</div>
						<div className="text-sm font-light text-center md:text-start">
							{t("home:crowdfunding-dec")}
						</div>
					</div>
					<div className="flex flex-col items-center md:items-start">
						<div>
							<Image
								alt={"logo"}
								src={"/images/verif.svg"}
								width={60}
								height={50}
							></Image>
						</div>
						<div className="py-4 font-bold">
							{t("home:connect")}
						</div>
						<div className="text-sm font-light text-center md:text-start">
							{t("home:connect-desc")}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
