import { Flex, Box, Button } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";

const AuthForm = () => {
	return (
		<Flex alignItems="center" alignContent="center" height="100%" width="100%">
			<Box mx="auto" />
			<Box
				as="form"
				onSubmit={(e) => e.preventDefault()}
				py={5}
				height="400px"
				width="400px"
				bg="var(--primary)"
				style={{
					boxShadow: "initial",
					borderRadius: "10px",
					border: "1px solid grey",
				}}
				px={5}
			>
				<Flex py={3} flexDirection="column" height="100%">
					<Box py={2}>
						<Label py={1}>E-mail</Label>
						<Input
							id="email"
							name="email"
							type="email"
							bg="white"
							style={{ borderRadius: "5px" }}
						/>
					</Box>
					<Box py={2} pb={4}>
						<Label py={1}>Password</Label>
						<Input
							id="password"
							name="password"
							type="password"
							bg="white"
							style={{ borderRadius: "5px" }}
						/>
					</Box>
					<Button type="submit">Submit</Button>
				</Flex>
			</Box>
			<Box mx="auto" />
		</Flex>
	);
};

export default AuthForm;
