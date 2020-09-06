//This configuration is necessary to use Jest with the enzyme helper. It configures enzyme to work with the specified version of react we are using
//Once we create this file, it must be called in the Jest configurations in package.json. I'm going to call it there.
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
