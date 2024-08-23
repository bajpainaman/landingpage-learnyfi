import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, LinkBox, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-4">
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="flex-start"
				flex-direction="row"
				width="30%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Image
						src="https://uploads.quarkly.io/66c821889710450018a25921/images/classcutapple%20%281%29.png?v=2024-08-23T05:49:10.213Z"
						display="block"
						width="36px"
						height="36px"
						srcSet="https://smartuploads.quarkly.io/66c821889710450018a25921/images/classcutapple%20%281%29.png?v=2024-08-23T05%3A49%3A10.213Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/classcutapple%20%281%29.png?v=2024-08-23T05%3A49%3A10.213Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/classcutapple%20%281%29.png?v=2024-08-23T05%3A49%3A10.213Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/classcutapple%20%281%29.png?v=2024-08-23T05%3A49%3A10.213Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/classcutapple%20%281%29.png?v=2024-08-23T05%3A49%3A10.213Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/classcutapple%20%281%29.png?v=2024-08-23T05%3A49%3A10.213Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/classcutapple%20%281%29.png?v=2024-08-23T05%3A49%3A10.213Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--headline3"
						sm-margin="0px 0 0px 0"
						display="block"
					>
						LearnyFi
					</Text>
				</LinkBox>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="70%"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="ai"
					icon={AiOutlineMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
				/>
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-start"
					justify-content="flex-end"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
					>
						<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
							<Image src="https://uploads.quarkly.io/6457b971d28fe100213a0f35/images/flower-logo-template.svg?v=2023-08-06T19:34:51.878Z" display="block" width="36px" height="36px" />
							<Text
								margin="0"
								md-margin="0px 0 0px 0"
								text-align="left"
								font="--lead"
								sm-margin="0px 0 0px 0"
								display="block"
								lg-font="--headline3"
							>
								Company
							</Text>
						</LinkBox>
					</Box>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="8px"
						lg-flex-direction="column"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="--lead"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override
							slot="item-active"
							border-width="0 0 2px 0"
							border-style="solid"
							border-color="--color-darkL2"
							lg-border-width="0 0 0 2px"
						/>
						<Override slot="item" padding="6px 8px 6px 8px" lg-padding="6px 12px 6px 12px" />
						<Override slot="link-active" cursor="default" color="--darkL2" hover-color="--darkL2" />
						<Override slot="link-about" />
					</Components.QuarklycommunityKitMenu>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="0px 0px 0px 0px"
					>
						<SocialMedia
							instagram="https://instagram.com/instagram"
							margin="0px 0px 0px 0px"
							facebook="https://www.facebook.com/quarklyapp/"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							lg-display="flex"
							lg-grid-gap="12px"
						>
							<Override slot="link-twitter" margin="0px 0px 0px 5px">
								<div />
							</Override>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								hover-color="--light"
								display="flex"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
							/>
							<Override slot="icon" size="32px" border-radius="50px" color="--grey" />
							<Override slot="link-facebook" margin="0px 5px 0px 0px">
								<div />
							</Override>
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="90px 0 180px 0" lg-padding="90px 0 90px 0" sm-padding="45px 0 60px 0" quarkly-title="About-15">
			<Override slot="SectionContent" flex-direction="row" lg-flex-wrap="wrap" sm-min-width="280px" />
			<Box
				width="20%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				justify-content="space-between"
				lg-width="100%"
				lg-align-items="stretch"
				lg-flex-direction="row"
				lg-justify-content="flex-start"
				md-flex-direction="column"
			>
				<Box
					lg-width="80%"
					lg-display="flex"
					lg-flex-direction="column"
					lg-align-items="flex-start"
					lg-justify-content="flex-end"
					md-width="100%"
					height="100%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					justify-content="space-around"
				>
					<Text
						margin="0px 0px 12px 0px"
						font="--base"
						text-transform="uppercase"
						color="--red"
						letter-spacing="1px"
					>
						About Us
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						font="--headline2"
						color="--dark"
						lg-text-align="left"
						md-padding="0px 0px 0px 0px"
					>
						We Are Shaping the Future of Learning{" "}
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						font="--base"
						color="--greyD2"
						md-text-align="left"
						lg-flex="1 1 0%"
						lg-padding="0px 0px 0px 0px"
						lg-margin="0px 0px 32px 0px"
						sm-margin="0px 0px 28px 0px"
					>
						We break down long lectures into short clips, making it easy to review and revise on the go!
					</Text>
					<Link
						href="#"
						color="--lightD1"
						text-decoration-line="initial"
						padding="7px 24px 8px 24px"
						background="--color-red"
						font="--base"
						transition="--opacityOut"
						hover-opacity=".7"
						letter-spacing="1px"
						border-radius="4px"
					>
						Learn More
					</Link>
				</Box>
			</Box>
			<Box
				width="80%"
				display="flex"
				justify-content="flex-end"
				lg-width="100%"
				lg-margin="48px 0px 0px 0px"
				lg-flex-direction="column"
			>
				<Box position="relative">
					<Image
						src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
						display="block"
						object-fit="cover"
						position="absolute"
						height="250px"
						width="299.75px"
						left="-119.75px"
						bottom="-120px"
						lg-position="static"
						lg-width="100%"
						lg-height="auto"
						right="370px"
						srcSet="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Image
						src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
						display="block"
						object-fit="cover"
						height="380px"
						width="550px"
						lg-width="100%"
						lg-height="auto"
						lg-margin="8px 0px 0px 0px"
						srcSet="https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0">
			<Box
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				margin="0px 0px 32px 0px"
				width="100%"
			>
				<Text margin="0px 0px 0px 0px" font="--headline1" color="--dark" text-align="center">
					Our Team
				</Text>
				<Text
					margin="16px 0px 0px 0px"
					font="--lead"
					display="block"
					width="50%"
					text-align="center"
					color="--red"
					lg-width="100%"
				>
					Our dedicated team of experts brings the right people together to revolutionize education through innovative technology and personalized learning solutions.
				</Text>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				align-items="stretch"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				width="100%"
			>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://uploads.quarkly.io/66c821889710450018a25921/images/elie.jpeg?v=2024-08-23T06:10:36.258Z"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
							srcSet="https://smartuploads.quarkly.io/66c821889710450018a25921/images/elie.jpeg?v=2024-08-23T06%3A10%3A36.258Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/elie.jpeg?v=2024-08-23T06%3A10%3A36.258Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/elie.jpeg?v=2024-08-23T06%3A10%3A36.258Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/elie.jpeg?v=2024-08-23T06%3A10%3A36.258Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/elie.jpeg?v=2024-08-23T06%3A10%3A36.258Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/elie.jpeg?v=2024-08-23T06%3A10%3A36.258Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/elie.jpeg?v=2024-08-23T06%3A10%3A36.258Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Elie Bibliowicz{" "}
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--red"
						>
							CEO & Co-Founder{" "}
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://uploads.quarkly.io/66c821889710450018a25921/images/anthony%20.jpeg?v=2024-08-23T06:10:36.247Z"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
							srcSet="https://smartuploads.quarkly.io/66c821889710450018a25921/images/anthony%20.jpeg?v=2024-08-23T06%3A10%3A36.247Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/anthony%20.jpeg?v=2024-08-23T06%3A10%3A36.247Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/anthony%20.jpeg?v=2024-08-23T06%3A10%3A36.247Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/anthony%20.jpeg?v=2024-08-23T06%3A10%3A36.247Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/anthony%20.jpeg?v=2024-08-23T06%3A10%3A36.247Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/anthony%20.jpeg?v=2024-08-23T06%3A10%3A36.247Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/anthony%20.jpeg?v=2024-08-23T06%3A10%3A36.247Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Anthony D'Angelo
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--red"
						>
							CSO & Co-Founder
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://uploads.quarkly.io/66c821889710450018a25921/images/naman.png?v=2024-08-23T06:11:12.013Z"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
							srcSet="https://smartuploads.quarkly.io/66c821889710450018a25921/images/naman.png?v=2024-08-23T06%3A11%3A12.013Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/naman.png?v=2024-08-23T06%3A11%3A12.013Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/naman.png?v=2024-08-23T06%3A11%3A12.013Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/naman.png?v=2024-08-23T06%3A11%3A12.013Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/naman.png?v=2024-08-23T06%3A11%3A12.013Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/naman.png?v=2024-08-23T06%3A11%3A12.013Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/naman.png?v=2024-08-23T06%3A11%3A12.013Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Naman Bajpai
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--red"
						>
							CTO & Co-Founder
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://uploads.quarkly.io/66c821889710450018a25921/images/momo.jpeg?v=2024-08-23T06:10:36.262Z"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
							srcSet="https://smartuploads.quarkly.io/66c821889710450018a25921/images/momo.jpeg?v=2024-08-23T06%3A10%3A36.262Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/momo.jpeg?v=2024-08-23T06%3A10%3A36.262Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/momo.jpeg?v=2024-08-23T06%3A10%3A36.262Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/momo.jpeg?v=2024-08-23T06%3A10%3A36.262Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/momo.jpeg?v=2024-08-23T06%3A10%3A36.262Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/momo.jpeg?v=2024-08-23T06%3A10%3A36.262Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66c821889710450018a25921/images/momo.jpeg?v=2024-08-23T06%3A10%3A36.262Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Muhammad Rashid
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--red"
						>
							Founding Software Engineer{"  "}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-darkL1" padding="50px 0 50px 0" quarkly-title="Footer-19">
			<Box display="flex" justify-content="space-between" border-color="#232a44" md-flex-direction="column">
				<Box
					display="flex"
					md-margin="0px 0px 15px 0px"
					sm-flex-direction="column"
					justify-content="flex-start"
					align-items="center"
					grid-gap="24px"
				>
					<Box display="flex" grid-gap="8px">
						<Text margin="0px 0px 0px 0px" font="--base" color="white">
							Phone:
						</Text>
						<Link
							href="tel:+9877654321223"
							color="--light"
							text-decoration-line="initial"
							font="normal 300 16px/1.5 --fontFamily-sans"
							display="block"
							margin="0px 0px 0px 0px"
							sm-margin="0px 0 5px 0px"
							hover-color="#a78bfa"
						>
							+1 (215) 669 14 43
						</Link>
					</Box>
					<Box display="flex" grid-gap="8px">
						<Text margin="0px 0px 0px 0px" color="white" font="--base">
							E-mail:
						</Text>
						<Link
							href="tel:+12156691443"
							color="--light"
							text-decoration-line="initial"
							font="normal 300 16px/1.5 --fontFamily-sans"
							display="block"
							margin="0px 0px 0px 0px"
							hover-color="#a78bfa"
						>
							nb3283@drexel.edu
						</Link>
					</Box>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"66c821889710450018a2591f"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});