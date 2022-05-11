import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { normalize, schema } from "normalizr";

export const fetchItems = createAsyncThunk("items/fetchItems", async function (
  _,
  { rejectWithValue }
) {
  try {
    const response = await axios({
      url: "http://makefriendsback.promo-miner.art/test_main/",
      method: "POST",
      headers: {
        Authorization: "token b9112e99755195021fdd6e7dfb91080b1653a56a",
        "Access-Control-Allow-Headers": "X-Requested-With",
      },
      mode: "cors",
    });

    const data = await response.data;
    console.log(data);
    const normalized = normalize(data, [itemSchema]);
    return normalized.entities;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const itemSchema = new schema.Entity(
  "items",
  {},
  {
    idAttribute: (item) => item.data.name,
  }
);

export const dataItemSchema = new schema.Object(itemSchema);
export const interestsItemSchema = new schema.Array(itemSchema);

itemSchema.define({ dataItemSchema, interestsItemSchema });

export const itemsAdapter = createEntityAdapter({
  selectId: (item) => item,
});

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: itemsAdapter.getInitialState((state) => state.items),
  },
  reducers: {
    itemsReceived(state, action) {
      itemsAdapter.setAll(state, action.payload);
    },
    itemUpdated: itemsAdapter.updateOne,
  },
  extraReducers: {
    [fetchItems.fulfilled]: (state, action) => {
      itemsAdapter.setAll(state, action.payload);
    },
  },
});

export const { itemsReceived } = itemsSlice.actions;

export default itemsSlice.reducer;

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = itemsAdapter.getSelectors((state) => state.items);

/*

7 вариант - теперь пробую без нормализации



*/

/*

6 - тоже очень близко
 export const itemSchema = new schema.Entity(
  "items",
  {},
  {
    idAttribute: (item) => item.data.name,
  }
);

export const dataItemSchema = new schema.Entity("data", {
  data: itemSchema,
});

export const interestsItemSchema = new schema.Array(itemSchema);

itemSchema.define({ dataItemSchema, interestsItemSchema });

export const itemsAdapter = createEntityAdapter({
  selectId: (item) => item.idAttribute,
});


*/

/*
5 - очень близко

export const dataItemSchema = new schema.Entity("data", {
  data: itemSchema,
});

export const interestsItemSchema = new schema.Entity("interests", {
  items: itemSchema,
  data: itemSchema,
  // interests: [itemSchema],
});

itemSchema.define({
  items: Array(itemSchema),
  dataItemSchema: Object(itemSchema),
  // interestsSchema: Array(itemSchema),
});


export const itemsAdapter = createEntityAdapter({
  selectId: (item) => item.idAttribute,
});

*/

/*

4

export const itemEntity = new schema.Entity(
  "items",
  {},
  {
    idAttribute: (item) => item.data.name,
  }
);
export const itemsSchema = new schema.Array(itemEntity);
export const dataSchema = new schema.Object(itemEntity);
export const interestsSchema = new schema.Array(itemEntity);

itemEntity.define({
  items: Array(itemEntity),
  dataSchema: Object(itemEntity),
  interestsSchema: Array(itemEntity),
});

export const itemsAdapter = createEntityAdapter({
  selectId: (item) => item.idAttribute,
});

*/

/*

третий

export const itemSchema = new schema.Entity("items", {
  idAttribute: (item) => item.data.name,
});
export const dataSchema = new schema.Entity("data");

export const itemsAdapter = createEntityAdapter({
  selectId: (item) => item.idAttribute,
});

export const responseSchema = new schema.Union({
  items: itemSchema,
});

/*

второй вариант

export const itemSchema = new schema.Entity("items", {
  idAttribute: (item) => item.data.name,
});

export const dataSchema = new schema.Entity("datas", {
  idAttribute: (item) => item.name,
});

export const interestSchema = new schema.Entity("interests", {
  idAttribute: (item) => item.interests,
});
// export const dataSchema = new schema.Object(dataSchema);

export const responseSchema = new schema.Object({
  items: new schema.Array(itemSchema),
  datas: new schema.Object(dataSchema),
  interests: new schema.Array(interestSchema),
});

console.log(responseSchema);

itemSchema.define({
  responseSchema,
});

export const itemsAdapter = createEntityAdapter({
  selectId: (item) => item.idAttribute,
});

/*

/*
первый вариант
export const itemEntity = new schema.Entity(
  "items",
  {},
  {
    idAttribute: (item) => item.data.name,
  }
);
export const itemsEntity = new schema.Array(itemEntity);

itemEntity.define({
  items: Array(itemEntity),
});

export const itemsAdapter = createEntityAdapter({
  selectId: (item) => item.idAttribute,
});

*/
