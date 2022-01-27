import { ShallowWrapper } from "enzyme";

export const findTestAtt = (wrapper: ShallowWrapper, val: string) => {
    return wrapper.find(`[data-test='${val}']`);
}