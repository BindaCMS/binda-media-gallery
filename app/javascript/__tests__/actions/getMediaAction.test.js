import { getMediaAction } from "../../actions/getMediaAction";
import { types } from "../../actions/actionTypes";

describe("getMediaAction action", () => {
    it("works", () => {
        const expectedAction = { type: types.GET_MEDIA };
        expect(getMediaAction()).toEqual(expectedAction);
    });
});