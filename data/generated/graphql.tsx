import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  interval: any;
  json: any;
  money: any;
  point: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type SampleInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  accessToken: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};


/** expression to compare columns of type interval. All fields are combined with logical 'AND'. */
export type Interval_Comparison_Exp = {
  _eq?: Maybe<Scalars['interval']>;
  _gt?: Maybe<Scalars['interval']>;
  _gte?: Maybe<Scalars['interval']>;
  _in?: Maybe<Array<Scalars['interval']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['interval']>;
  _lte?: Maybe<Scalars['interval']>;
  _neq?: Maybe<Scalars['interval']>;
  _nin?: Maybe<Array<Scalars['interval']>>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};


/** expression to compare columns of type money. All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: Maybe<Scalars['money']>;
  _gt?: Maybe<Scalars['money']>;
  _gte?: Maybe<Scalars['money']>;
  _in?: Maybe<Array<Scalars['money']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['money']>;
  _lte?: Maybe<Scalars['money']>;
  _neq?: Maybe<Scalars['money']>;
  _nin?: Maybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** perform the action: "actionName" */
  actionName?: Maybe<SampleOutput>;
  /** delete data from the table: "r_category" */
  delete_r_category?: Maybe<R_Category_Mutation_Response>;
  /** delete single row from the table: "r_category" */
  delete_r_category_by_pk?: Maybe<R_Category>;
  /** delete data from the table: "r_type" */
  delete_r_type?: Maybe<R_Type_Mutation_Response>;
  /** delete single row from the table: "r_type" */
  delete_r_type_by_pk?: Maybe<R_Type>;
  /** delete data from the table: "restaurant" */
  delete_restaurant?: Maybe<Restaurant_Mutation_Response>;
  /** delete single row from the table: "restaurant" */
  delete_restaurant_by_pk?: Maybe<Restaurant>;
  /** delete data from the table: "stock" */
  delete_stock?: Maybe<Stock_Mutation_Response>;
  /** delete single row from the table: "stock" */
  delete_stock_by_pk?: Maybe<Stock>;
  /** delete data from the table: "stock_item" */
  delete_stock_item?: Maybe<Stock_Item_Mutation_Response>;
  /** delete single row from the table: "stock_item" */
  delete_stock_item_by_pk?: Maybe<Stock_Item>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "r_category" */
  insert_r_category?: Maybe<R_Category_Mutation_Response>;
  /** insert a single row into the table: "r_category" */
  insert_r_category_one?: Maybe<R_Category>;
  /** insert data into the table: "r_type" */
  insert_r_type?: Maybe<R_Type_Mutation_Response>;
  /** insert a single row into the table: "r_type" */
  insert_r_type_one?: Maybe<R_Type>;
  /** insert data into the table: "restaurant" */
  insert_restaurant?: Maybe<Restaurant_Mutation_Response>;
  /** insert a single row into the table: "restaurant" */
  insert_restaurant_one?: Maybe<Restaurant>;
  /** insert data into the table: "stock" */
  insert_stock?: Maybe<Stock_Mutation_Response>;
  /** insert data into the table: "stock_item" */
  insert_stock_item?: Maybe<Stock_Item_Mutation_Response>;
  /** insert a single row into the table: "stock_item" */
  insert_stock_item_one?: Maybe<Stock_Item>;
  /** insert a single row into the table: "stock" */
  insert_stock_one?: Maybe<Stock>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "r_category" */
  update_r_category?: Maybe<R_Category_Mutation_Response>;
  /** update single row of the table: "r_category" */
  update_r_category_by_pk?: Maybe<R_Category>;
  /** update data of the table: "r_type" */
  update_r_type?: Maybe<R_Type_Mutation_Response>;
  /** update single row of the table: "r_type" */
  update_r_type_by_pk?: Maybe<R_Type>;
  /** update data of the table: "restaurant" */
  update_restaurant?: Maybe<Restaurant_Mutation_Response>;
  /** update single row of the table: "restaurant" */
  update_restaurant_by_pk?: Maybe<Restaurant>;
  /** update data of the table: "stock" */
  update_stock?: Maybe<Stock_Mutation_Response>;
  /** update single row of the table: "stock" */
  update_stock_by_pk?: Maybe<Stock>;
  /** update data of the table: "stock_item" */
  update_stock_item?: Maybe<Stock_Item_Mutation_Response>;
  /** update single row of the table: "stock_item" */
  update_stock_item_by_pk?: Maybe<Stock_Item>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootActionNameArgs = {
  arg1: SampleInput;
};


/** mutation root */
export type Mutation_RootDelete_R_CategoryArgs = {
  where: R_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_R_Category_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_R_TypeArgs = {
  where: R_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_R_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RestaurantArgs = {
  where: Restaurant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Restaurant_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_StockArgs = {
  where: Stock_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stock_By_PkArgs = {
  date: Scalars['date'];
  r_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Stock_ItemArgs = {
  where: Stock_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stock_Item_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_R_CategoryArgs = {
  objects: Array<R_Category_Insert_Input>;
  on_conflict?: Maybe<R_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_R_Category_OneArgs = {
  object: R_Category_Insert_Input;
  on_conflict?: Maybe<R_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_R_TypeArgs = {
  objects: Array<R_Type_Insert_Input>;
  on_conflict?: Maybe<R_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_R_Type_OneArgs = {
  object: R_Type_Insert_Input;
  on_conflict?: Maybe<R_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RestaurantArgs = {
  objects: Array<Restaurant_Insert_Input>;
  on_conflict?: Maybe<Restaurant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restaurant_OneArgs = {
  object: Restaurant_Insert_Input;
  on_conflict?: Maybe<Restaurant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StockArgs = {
  objects: Array<Stock_Insert_Input>;
  on_conflict?: Maybe<Stock_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_ItemArgs = {
  objects: Array<Stock_Item_Insert_Input>;
  on_conflict?: Maybe<Stock_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_Item_OneArgs = {
  object: Stock_Item_Insert_Input;
  on_conflict?: Maybe<Stock_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_OneArgs = {
  object: Stock_Insert_Input;
  on_conflict?: Maybe<Stock_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_R_CategoryArgs = {
  _inc?: Maybe<R_Category_Inc_Input>;
  _set?: Maybe<R_Category_Set_Input>;
  where: R_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_R_Category_By_PkArgs = {
  _inc?: Maybe<R_Category_Inc_Input>;
  _set?: Maybe<R_Category_Set_Input>;
  pk_columns: R_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_R_TypeArgs = {
  _inc?: Maybe<R_Type_Inc_Input>;
  _set?: Maybe<R_Type_Set_Input>;
  where: R_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_R_Type_By_PkArgs = {
  _inc?: Maybe<R_Type_Inc_Input>;
  _set?: Maybe<R_Type_Set_Input>;
  pk_columns: R_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RestaurantArgs = {
  _inc?: Maybe<Restaurant_Inc_Input>;
  _set?: Maybe<Restaurant_Set_Input>;
  where: Restaurant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurant_By_PkArgs = {
  _inc?: Maybe<Restaurant_Inc_Input>;
  _set?: Maybe<Restaurant_Set_Input>;
  pk_columns: Restaurant_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StockArgs = {
  _inc?: Maybe<Stock_Inc_Input>;
  _set?: Maybe<Stock_Set_Input>;
  where: Stock_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_By_PkArgs = {
  _inc?: Maybe<Stock_Inc_Input>;
  _set?: Maybe<Stock_Set_Input>;
  pk_columns: Stock_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_ItemArgs = {
  _inc?: Maybe<Stock_Item_Inc_Input>;
  _set?: Maybe<Stock_Item_Set_Input>;
  where: Stock_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_Item_By_PkArgs = {
  _inc?: Maybe<Stock_Item_Inc_Input>;
  _set?: Maybe<Stock_Item_Set_Input>;
  pk_columns: Stock_Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}


/** expression to compare columns of type point. All fields are combined with logical 'AND'. */
export type Point_Comparison_Exp = {
  _eq?: Maybe<Scalars['point']>;
  _gt?: Maybe<Scalars['point']>;
  _gte?: Maybe<Scalars['point']>;
  _in?: Maybe<Array<Scalars['point']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['point']>;
  _lte?: Maybe<Scalars['point']>;
  _neq?: Maybe<Scalars['point']>;
  _nin?: Maybe<Array<Scalars['point']>>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "r_category" */
  r_category: Array<R_Category>;
  /** fetch aggregated fields from the table: "r_category" */
  r_category_aggregate: R_Category_Aggregate;
  /** fetch data from the table: "r_category" using primary key columns */
  r_category_by_pk?: Maybe<R_Category>;
  /** fetch data from the table: "r_type" */
  r_type: Array<R_Type>;
  /** fetch aggregated fields from the table: "r_type" */
  r_type_aggregate: R_Type_Aggregate;
  /** fetch data from the table: "r_type" using primary key columns */
  r_type_by_pk?: Maybe<R_Type>;
  /** fetch data from the table: "restaurant" */
  restaurant: Array<Restaurant>;
  /** fetch aggregated fields from the table: "restaurant" */
  restaurant_aggregate: Restaurant_Aggregate;
  /** fetch data from the table: "restaurant" using primary key columns */
  restaurant_by_pk?: Maybe<Restaurant>;
  /** fetch data from the table: "stock" */
  stock: Array<Stock>;
  /** fetch aggregated fields from the table: "stock" */
  stock_aggregate: Stock_Aggregate;
  /** fetch data from the table: "stock" using primary key columns */
  stock_by_pk?: Maybe<Stock>;
  /** fetch data from the table: "stock_item" */
  stock_item: Array<Stock_Item>;
  /** fetch aggregated fields from the table: "stock_item" */
  stock_item_aggregate: Stock_Item_Aggregate;
  /** fetch data from the table: "stock_item" using primary key columns */
  stock_item_by_pk?: Maybe<Stock_Item>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


/** query root */
export type Query_RootR_CategoryArgs = {
  distinct_on?: Maybe<Array<R_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<R_Category_Order_By>>;
  where?: Maybe<R_Category_Bool_Exp>;
};


/** query root */
export type Query_RootR_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<R_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<R_Category_Order_By>>;
  where?: Maybe<R_Category_Bool_Exp>;
};


/** query root */
export type Query_RootR_Category_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootR_TypeArgs = {
  distinct_on?: Maybe<Array<R_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<R_Type_Order_By>>;
  where?: Maybe<R_Type_Bool_Exp>;
};


/** query root */
export type Query_RootR_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<R_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<R_Type_Order_By>>;
  where?: Maybe<R_Type_Bool_Exp>;
};


/** query root */
export type Query_RootR_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRestaurantArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Order_By>>;
  where?: Maybe<Restaurant_Bool_Exp>;
};


/** query root */
export type Query_RootRestaurant_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Order_By>>;
  where?: Maybe<Restaurant_Bool_Exp>;
};


/** query root */
export type Query_RootRestaurant_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootStockArgs = {
  distinct_on?: Maybe<Array<Stock_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Order_By>>;
  where?: Maybe<Stock_Bool_Exp>;
};


/** query root */
export type Query_RootStock_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Order_By>>;
  where?: Maybe<Stock_Bool_Exp>;
};


/** query root */
export type Query_RootStock_By_PkArgs = {
  date: Scalars['date'];
  r_id: Scalars['Int'];
};


/** query root */
export type Query_RootStock_ItemArgs = {
  distinct_on?: Maybe<Array<Stock_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Item_Order_By>>;
  where?: Maybe<Stock_Item_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Item_Order_By>>;
  where?: Maybe<Stock_Item_Bool_Exp>;
};


/** query root */
export type Query_RootStock_Item_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "r_category" */
export type R_Category = {
  __typename?: 'r_category';
  id: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
};

/** aggregated selection of "r_category" */
export type R_Category_Aggregate = {
  __typename?: 'r_category_aggregate';
  aggregate?: Maybe<R_Category_Aggregate_Fields>;
  nodes: Array<R_Category>;
};

/** aggregate fields of "r_category" */
export type R_Category_Aggregate_Fields = {
  __typename?: 'r_category_aggregate_fields';
  avg?: Maybe<R_Category_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<R_Category_Max_Fields>;
  min?: Maybe<R_Category_Min_Fields>;
  stddev?: Maybe<R_Category_Stddev_Fields>;
  stddev_pop?: Maybe<R_Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<R_Category_Stddev_Samp_Fields>;
  sum?: Maybe<R_Category_Sum_Fields>;
  var_pop?: Maybe<R_Category_Var_Pop_Fields>;
  var_samp?: Maybe<R_Category_Var_Samp_Fields>;
  variance?: Maybe<R_Category_Variance_Fields>;
};


/** aggregate fields of "r_category" */
export type R_Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<R_Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "r_category" */
export type R_Category_Aggregate_Order_By = {
  avg?: Maybe<R_Category_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<R_Category_Max_Order_By>;
  min?: Maybe<R_Category_Min_Order_By>;
  stddev?: Maybe<R_Category_Stddev_Order_By>;
  stddev_pop?: Maybe<R_Category_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<R_Category_Stddev_Samp_Order_By>;
  sum?: Maybe<R_Category_Sum_Order_By>;
  var_pop?: Maybe<R_Category_Var_Pop_Order_By>;
  var_samp?: Maybe<R_Category_Var_Samp_Order_By>;
  variance?: Maybe<R_Category_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "r_category" */
export type R_Category_Arr_Rel_Insert_Input = {
  data: Array<R_Category_Insert_Input>;
  on_conflict?: Maybe<R_Category_On_Conflict>;
};

/** aggregate avg on columns */
export type R_Category_Avg_Fields = {
  __typename?: 'r_category_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "r_category" */
export type R_Category_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "r_category". All fields are combined with a logical 'AND'. */
export type R_Category_Bool_Exp = {
  _and?: Maybe<Array<Maybe<R_Category_Bool_Exp>>>;
  _not?: Maybe<R_Category_Bool_Exp>;
  _or?: Maybe<Array<Maybe<R_Category_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "r_category" */
export enum R_Category_Constraint {
  /** unique or primary key constraint */
  RCategoryPkey = 'r_category_pkey'
}

/** input type for incrementing integer column in table "r_category" */
export type R_Category_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "r_category" */
export type R_Category_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type R_Category_Max_Fields = {
  __typename?: 'r_category_max_fields';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "r_category" */
export type R_Category_Max_Order_By = {
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type R_Category_Min_Fields = {
  __typename?: 'r_category_min_fields';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "r_category" */
export type R_Category_Min_Order_By = {
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** response of any mutation on the table "r_category" */
export type R_Category_Mutation_Response = {
  __typename?: 'r_category_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<R_Category>;
};

/** input type for inserting object relation for remote table "r_category" */
export type R_Category_Obj_Rel_Insert_Input = {
  data: R_Category_Insert_Input;
  on_conflict?: Maybe<R_Category_On_Conflict>;
};

/** on conflict condition type for table "r_category" */
export type R_Category_On_Conflict = {
  constraint: R_Category_Constraint;
  update_columns: Array<R_Category_Update_Column>;
  where?: Maybe<R_Category_Bool_Exp>;
};

/** ordering options when selecting data from "r_category" */
export type R_Category_Order_By = {
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** primary key columns input for table: "r_category" */
export type R_Category_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "r_category" */
export enum R_Category_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "r_category" */
export type R_Category_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type R_Category_Stddev_Fields = {
  __typename?: 'r_category_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "r_category" */
export type R_Category_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type R_Category_Stddev_Pop_Fields = {
  __typename?: 'r_category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "r_category" */
export type R_Category_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type R_Category_Stddev_Samp_Fields = {
  __typename?: 'r_category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "r_category" */
export type R_Category_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type R_Category_Sum_Fields = {
  __typename?: 'r_category_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "r_category" */
export type R_Category_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "r_category" */
export enum R_Category_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text'
}

/** aggregate var_pop on columns */
export type R_Category_Var_Pop_Fields = {
  __typename?: 'r_category_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "r_category" */
export type R_Category_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type R_Category_Var_Samp_Fields = {
  __typename?: 'r_category_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "r_category" */
export type R_Category_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type R_Category_Variance_Fields = {
  __typename?: 'r_category_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "r_category" */
export type R_Category_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "r_type" */
export type R_Type = {
  __typename?: 'r_type';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "r_type" */
export type R_Type_Aggregate = {
  __typename?: 'r_type_aggregate';
  aggregate?: Maybe<R_Type_Aggregate_Fields>;
  nodes: Array<R_Type>;
};

/** aggregate fields of "r_type" */
export type R_Type_Aggregate_Fields = {
  __typename?: 'r_type_aggregate_fields';
  avg?: Maybe<R_Type_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<R_Type_Max_Fields>;
  min?: Maybe<R_Type_Min_Fields>;
  stddev?: Maybe<R_Type_Stddev_Fields>;
  stddev_pop?: Maybe<R_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<R_Type_Stddev_Samp_Fields>;
  sum?: Maybe<R_Type_Sum_Fields>;
  var_pop?: Maybe<R_Type_Var_Pop_Fields>;
  var_samp?: Maybe<R_Type_Var_Samp_Fields>;
  variance?: Maybe<R_Type_Variance_Fields>;
};


/** aggregate fields of "r_type" */
export type R_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<R_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "r_type" */
export type R_Type_Aggregate_Order_By = {
  avg?: Maybe<R_Type_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<R_Type_Max_Order_By>;
  min?: Maybe<R_Type_Min_Order_By>;
  stddev?: Maybe<R_Type_Stddev_Order_By>;
  stddev_pop?: Maybe<R_Type_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<R_Type_Stddev_Samp_Order_By>;
  sum?: Maybe<R_Type_Sum_Order_By>;
  var_pop?: Maybe<R_Type_Var_Pop_Order_By>;
  var_samp?: Maybe<R_Type_Var_Samp_Order_By>;
  variance?: Maybe<R_Type_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "r_type" */
export type R_Type_Arr_Rel_Insert_Input = {
  data: Array<R_Type_Insert_Input>;
  on_conflict?: Maybe<R_Type_On_Conflict>;
};

/** aggregate avg on columns */
export type R_Type_Avg_Fields = {
  __typename?: 'r_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "r_type" */
export type R_Type_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "r_type". All fields are combined with a logical 'AND'. */
export type R_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<R_Type_Bool_Exp>>>;
  _not?: Maybe<R_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<R_Type_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "r_type" */
export enum R_Type_Constraint {
  /** unique or primary key constraint */
  RTypePkey = 'r_type_pkey'
}

/** input type for incrementing integer column in table "r_type" */
export type R_Type_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "r_type" */
export type R_Type_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type R_Type_Max_Fields = {
  __typename?: 'r_type_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "r_type" */
export type R_Type_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type R_Type_Min_Fields = {
  __typename?: 'r_type_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "r_type" */
export type R_Type_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "r_type" */
export type R_Type_Mutation_Response = {
  __typename?: 'r_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<R_Type>;
};

/** input type for inserting object relation for remote table "r_type" */
export type R_Type_Obj_Rel_Insert_Input = {
  data: R_Type_Insert_Input;
  on_conflict?: Maybe<R_Type_On_Conflict>;
};

/** on conflict condition type for table "r_type" */
export type R_Type_On_Conflict = {
  constraint: R_Type_Constraint;
  update_columns: Array<R_Type_Update_Column>;
  where?: Maybe<R_Type_Bool_Exp>;
};

/** ordering options when selecting data from "r_type" */
export type R_Type_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "r_type" */
export type R_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "r_type" */
export enum R_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "r_type" */
export type R_Type_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type R_Type_Stddev_Fields = {
  __typename?: 'r_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "r_type" */
export type R_Type_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type R_Type_Stddev_Pop_Fields = {
  __typename?: 'r_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "r_type" */
export type R_Type_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type R_Type_Stddev_Samp_Fields = {
  __typename?: 'r_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "r_type" */
export type R_Type_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type R_Type_Sum_Fields = {
  __typename?: 'r_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "r_type" */
export type R_Type_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "r_type" */
export enum R_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type R_Type_Var_Pop_Fields = {
  __typename?: 'r_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "r_type" */
export type R_Type_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type R_Type_Var_Samp_Fields = {
  __typename?: 'r_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "r_type" */
export type R_Type_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type R_Type_Variance_Fields = {
  __typename?: 'r_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "r_type" */
export type R_Type_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "restaurant" */
export type Restaurant = {
  __typename?: 'restaurant';
  address?: Maybe<Scalars['point']>;
  bkgUrl: Scalars['String'];
  category: Scalars['Int'];
  category2: Scalars['Int'];
  category3: Scalars['Int'];
  id: Scalars['Int'];
  logoUrl: Scalars['String'];
  name: Scalars['String'];
  startFriday?: Maybe<Scalars['interval']>;
  startMonday?: Maybe<Scalars['interval']>;
  startSaturday?: Maybe<Scalars['interval']>;
  startSunday?: Maybe<Scalars['interval']>;
  startThursday?: Maybe<Scalars['interval']>;
  startTuesday?: Maybe<Scalars['interval']>;
  startWednesday?: Maybe<Scalars['interval']>;
  type: Scalars['Int'];
};

/** aggregated selection of "restaurant" */
export type Restaurant_Aggregate = {
  __typename?: 'restaurant_aggregate';
  aggregate?: Maybe<Restaurant_Aggregate_Fields>;
  nodes: Array<Restaurant>;
};

/** aggregate fields of "restaurant" */
export type Restaurant_Aggregate_Fields = {
  __typename?: 'restaurant_aggregate_fields';
  avg?: Maybe<Restaurant_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Restaurant_Max_Fields>;
  min?: Maybe<Restaurant_Min_Fields>;
  stddev?: Maybe<Restaurant_Stddev_Fields>;
  stddev_pop?: Maybe<Restaurant_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Restaurant_Stddev_Samp_Fields>;
  sum?: Maybe<Restaurant_Sum_Fields>;
  var_pop?: Maybe<Restaurant_Var_Pop_Fields>;
  var_samp?: Maybe<Restaurant_Var_Samp_Fields>;
  variance?: Maybe<Restaurant_Variance_Fields>;
};


/** aggregate fields of "restaurant" */
export type Restaurant_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Restaurant_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "restaurant" */
export type Restaurant_Aggregate_Order_By = {
  avg?: Maybe<Restaurant_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Restaurant_Max_Order_By>;
  min?: Maybe<Restaurant_Min_Order_By>;
  stddev?: Maybe<Restaurant_Stddev_Order_By>;
  stddev_pop?: Maybe<Restaurant_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Restaurant_Stddev_Samp_Order_By>;
  sum?: Maybe<Restaurant_Sum_Order_By>;
  var_pop?: Maybe<Restaurant_Var_Pop_Order_By>;
  var_samp?: Maybe<Restaurant_Var_Samp_Order_By>;
  variance?: Maybe<Restaurant_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "restaurant" */
export type Restaurant_Arr_Rel_Insert_Input = {
  data: Array<Restaurant_Insert_Input>;
  on_conflict?: Maybe<Restaurant_On_Conflict>;
};

/** aggregate avg on columns */
export type Restaurant_Avg_Fields = {
  __typename?: 'restaurant_avg_fields';
  category?: Maybe<Scalars['Float']>;
  category2?: Maybe<Scalars['Float']>;
  category3?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "restaurant" */
export type Restaurant_Avg_Order_By = {
  category?: Maybe<Order_By>;
  category2?: Maybe<Order_By>;
  category3?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "restaurant". All fields are combined with a logical 'AND'. */
export type Restaurant_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Restaurant_Bool_Exp>>>;
  _not?: Maybe<Restaurant_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Restaurant_Bool_Exp>>>;
  address?: Maybe<Point_Comparison_Exp>;
  bkgUrl?: Maybe<String_Comparison_Exp>;
  category?: Maybe<Int_Comparison_Exp>;
  category2?: Maybe<Int_Comparison_Exp>;
  category3?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  logoUrl?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  startFriday?: Maybe<Interval_Comparison_Exp>;
  startMonday?: Maybe<Interval_Comparison_Exp>;
  startSaturday?: Maybe<Interval_Comparison_Exp>;
  startSunday?: Maybe<Interval_Comparison_Exp>;
  startThursday?: Maybe<Interval_Comparison_Exp>;
  startTuesday?: Maybe<Interval_Comparison_Exp>;
  startWednesday?: Maybe<Interval_Comparison_Exp>;
  type?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "restaurant" */
export enum Restaurant_Constraint {
  /** unique or primary key constraint */
  RestaurantNameKey = 'restaurant_name_key',
  /** unique or primary key constraint */
  RestaurantPkey = 'restaurant_pkey'
}

/** input type for incrementing integer column in table "restaurant" */
export type Restaurant_Inc_Input = {
  category?: Maybe<Scalars['Int']>;
  category2?: Maybe<Scalars['Int']>;
  category3?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "restaurant" */
export type Restaurant_Insert_Input = {
  address?: Maybe<Scalars['point']>;
  bkgUrl?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['Int']>;
  category2?: Maybe<Scalars['Int']>;
  category3?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  logoUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startFriday?: Maybe<Scalars['interval']>;
  startMonday?: Maybe<Scalars['interval']>;
  startSaturday?: Maybe<Scalars['interval']>;
  startSunday?: Maybe<Scalars['interval']>;
  startThursday?: Maybe<Scalars['interval']>;
  startTuesday?: Maybe<Scalars['interval']>;
  startWednesday?: Maybe<Scalars['interval']>;
  type?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Restaurant_Max_Fields = {
  __typename?: 'restaurant_max_fields';
  bkgUrl?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['Int']>;
  category2?: Maybe<Scalars['Int']>;
  category3?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  logoUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "restaurant" */
export type Restaurant_Max_Order_By = {
  bkgUrl?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  category2?: Maybe<Order_By>;
  category3?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logoUrl?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Restaurant_Min_Fields = {
  __typename?: 'restaurant_min_fields';
  bkgUrl?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['Int']>;
  category2?: Maybe<Scalars['Int']>;
  category3?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  logoUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "restaurant" */
export type Restaurant_Min_Order_By = {
  bkgUrl?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  category2?: Maybe<Order_By>;
  category3?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logoUrl?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "restaurant" */
export type Restaurant_Mutation_Response = {
  __typename?: 'restaurant_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Restaurant>;
};

/** input type for inserting object relation for remote table "restaurant" */
export type Restaurant_Obj_Rel_Insert_Input = {
  data: Restaurant_Insert_Input;
  on_conflict?: Maybe<Restaurant_On_Conflict>;
};

/** on conflict condition type for table "restaurant" */
export type Restaurant_On_Conflict = {
  constraint: Restaurant_Constraint;
  update_columns: Array<Restaurant_Update_Column>;
  where?: Maybe<Restaurant_Bool_Exp>;
};

/** ordering options when selecting data from "restaurant" */
export type Restaurant_Order_By = {
  address?: Maybe<Order_By>;
  bkgUrl?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  category2?: Maybe<Order_By>;
  category3?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logoUrl?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  startFriday?: Maybe<Order_By>;
  startMonday?: Maybe<Order_By>;
  startSaturday?: Maybe<Order_By>;
  startSunday?: Maybe<Order_By>;
  startThursday?: Maybe<Order_By>;
  startTuesday?: Maybe<Order_By>;
  startWednesday?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "restaurant" */
export type Restaurant_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "restaurant" */
export enum Restaurant_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BkgUrl = 'bkgUrl',
  /** column name */
  Category = 'category',
  /** column name */
  Category2 = 'category2',
  /** column name */
  Category3 = 'category3',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  Name = 'name',
  /** column name */
  StartFriday = 'startFriday',
  /** column name */
  StartMonday = 'startMonday',
  /** column name */
  StartSaturday = 'startSaturday',
  /** column name */
  StartSunday = 'startSunday',
  /** column name */
  StartThursday = 'startThursday',
  /** column name */
  StartTuesday = 'startTuesday',
  /** column name */
  StartWednesday = 'startWednesday',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "restaurant" */
export type Restaurant_Set_Input = {
  address?: Maybe<Scalars['point']>;
  bkgUrl?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['Int']>;
  category2?: Maybe<Scalars['Int']>;
  category3?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  logoUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startFriday?: Maybe<Scalars['interval']>;
  startMonday?: Maybe<Scalars['interval']>;
  startSaturday?: Maybe<Scalars['interval']>;
  startSunday?: Maybe<Scalars['interval']>;
  startThursday?: Maybe<Scalars['interval']>;
  startTuesday?: Maybe<Scalars['interval']>;
  startWednesday?: Maybe<Scalars['interval']>;
  type?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Restaurant_Stddev_Fields = {
  __typename?: 'restaurant_stddev_fields';
  category?: Maybe<Scalars['Float']>;
  category2?: Maybe<Scalars['Float']>;
  category3?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "restaurant" */
export type Restaurant_Stddev_Order_By = {
  category?: Maybe<Order_By>;
  category2?: Maybe<Order_By>;
  category3?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Restaurant_Stddev_Pop_Fields = {
  __typename?: 'restaurant_stddev_pop_fields';
  category?: Maybe<Scalars['Float']>;
  category2?: Maybe<Scalars['Float']>;
  category3?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "restaurant" */
export type Restaurant_Stddev_Pop_Order_By = {
  category?: Maybe<Order_By>;
  category2?: Maybe<Order_By>;
  category3?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Restaurant_Stddev_Samp_Fields = {
  __typename?: 'restaurant_stddev_samp_fields';
  category?: Maybe<Scalars['Float']>;
  category2?: Maybe<Scalars['Float']>;
  category3?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "restaurant" */
export type Restaurant_Stddev_Samp_Order_By = {
  category?: Maybe<Order_By>;
  category2?: Maybe<Order_By>;
  category3?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Restaurant_Sum_Fields = {
  __typename?: 'restaurant_sum_fields';
  category?: Maybe<Scalars['Int']>;
  category2?: Maybe<Scalars['Int']>;
  category3?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "restaurant" */
export type Restaurant_Sum_Order_By = {
  category?: Maybe<Order_By>;
  category2?: Maybe<Order_By>;
  category3?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** update columns of table "restaurant" */
export enum Restaurant_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BkgUrl = 'bkgUrl',
  /** column name */
  Category = 'category',
  /** column name */
  Category2 = 'category2',
  /** column name */
  Category3 = 'category3',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  Name = 'name',
  /** column name */
  StartFriday = 'startFriday',
  /** column name */
  StartMonday = 'startMonday',
  /** column name */
  StartSaturday = 'startSaturday',
  /** column name */
  StartSunday = 'startSunday',
  /** column name */
  StartThursday = 'startThursday',
  /** column name */
  StartTuesday = 'startTuesday',
  /** column name */
  StartWednesday = 'startWednesday',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type Restaurant_Var_Pop_Fields = {
  __typename?: 'restaurant_var_pop_fields';
  category?: Maybe<Scalars['Float']>;
  category2?: Maybe<Scalars['Float']>;
  category3?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "restaurant" */
export type Restaurant_Var_Pop_Order_By = {
  category?: Maybe<Order_By>;
  category2?: Maybe<Order_By>;
  category3?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Restaurant_Var_Samp_Fields = {
  __typename?: 'restaurant_var_samp_fields';
  category?: Maybe<Scalars['Float']>;
  category2?: Maybe<Scalars['Float']>;
  category3?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "restaurant" */
export type Restaurant_Var_Samp_Order_By = {
  category?: Maybe<Order_By>;
  category2?: Maybe<Order_By>;
  category3?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Restaurant_Variance_Fields = {
  __typename?: 'restaurant_variance_fields';
  category?: Maybe<Scalars['Float']>;
  category2?: Maybe<Scalars['Float']>;
  category3?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "restaurant" */
export type Restaurant_Variance_Order_By = {
  category?: Maybe<Order_By>;
  category2?: Maybe<Order_By>;
  category3?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** columns and relationships of "stock" */
export type Stock = {
  __typename?: 'stock';
  count: Scalars['Int'];
  date: Scalars['date'];
  price: Scalars['money'];
  r_id: Scalars['Int'];
  startPrice?: Maybe<Scalars['money']>;
};

/** aggregated selection of "stock" */
export type Stock_Aggregate = {
  __typename?: 'stock_aggregate';
  aggregate?: Maybe<Stock_Aggregate_Fields>;
  nodes: Array<Stock>;
};

/** aggregate fields of "stock" */
export type Stock_Aggregate_Fields = {
  __typename?: 'stock_aggregate_fields';
  avg?: Maybe<Stock_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stock_Max_Fields>;
  min?: Maybe<Stock_Min_Fields>;
  stddev?: Maybe<Stock_Stddev_Fields>;
  stddev_pop?: Maybe<Stock_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stock_Stddev_Samp_Fields>;
  sum?: Maybe<Stock_Sum_Fields>;
  var_pop?: Maybe<Stock_Var_Pop_Fields>;
  var_samp?: Maybe<Stock_Var_Samp_Fields>;
  variance?: Maybe<Stock_Variance_Fields>;
};


/** aggregate fields of "stock" */
export type Stock_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stock_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stock" */
export type Stock_Aggregate_Order_By = {
  avg?: Maybe<Stock_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Stock_Max_Order_By>;
  min?: Maybe<Stock_Min_Order_By>;
  stddev?: Maybe<Stock_Stddev_Order_By>;
  stddev_pop?: Maybe<Stock_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Stock_Stddev_Samp_Order_By>;
  sum?: Maybe<Stock_Sum_Order_By>;
  var_pop?: Maybe<Stock_Var_Pop_Order_By>;
  var_samp?: Maybe<Stock_Var_Samp_Order_By>;
  variance?: Maybe<Stock_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stock" */
export type Stock_Arr_Rel_Insert_Input = {
  data: Array<Stock_Insert_Input>;
  on_conflict?: Maybe<Stock_On_Conflict>;
};

/** aggregate avg on columns */
export type Stock_Avg_Fields = {
  __typename?: 'stock_avg_fields';
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
  startPrice?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stock" */
export type Stock_Avg_Order_By = {
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  startPrice?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stock". All fields are combined with a logical 'AND'. */
export type Stock_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stock_Bool_Exp>>>;
  _not?: Maybe<Stock_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stock_Bool_Exp>>>;
  count?: Maybe<Int_Comparison_Exp>;
  date?: Maybe<Date_Comparison_Exp>;
  price?: Maybe<Money_Comparison_Exp>;
  r_id?: Maybe<Int_Comparison_Exp>;
  startPrice?: Maybe<Money_Comparison_Exp>;
};

/** unique or primary key constraints on table "stock" */
export enum Stock_Constraint {
  /** unique or primary key constraint */
  StockPkey = 'stock_pkey'
}

/** input type for incrementing integer column in table "stock" */
export type Stock_Inc_Input = {
  count?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
  r_id?: Maybe<Scalars['Int']>;
  startPrice?: Maybe<Scalars['money']>;
};

/** input type for inserting data into table "stock" */
export type Stock_Insert_Input = {
  count?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  price?: Maybe<Scalars['money']>;
  r_id?: Maybe<Scalars['Int']>;
  startPrice?: Maybe<Scalars['money']>;
};

/** columns and relationships of "stock_item" */
export type Stock_Item = {
  __typename?: 'stock_item';
  description: Scalars['String'];
  id: Scalars['Int'];
  photoUrl: Scalars['String'];
  r_id: Scalars['Int'];
  s_date: Scalars['date'];
};

/** aggregated selection of "stock_item" */
export type Stock_Item_Aggregate = {
  __typename?: 'stock_item_aggregate';
  aggregate?: Maybe<Stock_Item_Aggregate_Fields>;
  nodes: Array<Stock_Item>;
};

/** aggregate fields of "stock_item" */
export type Stock_Item_Aggregate_Fields = {
  __typename?: 'stock_item_aggregate_fields';
  avg?: Maybe<Stock_Item_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stock_Item_Max_Fields>;
  min?: Maybe<Stock_Item_Min_Fields>;
  stddev?: Maybe<Stock_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Stock_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stock_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Stock_Item_Sum_Fields>;
  var_pop?: Maybe<Stock_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Stock_Item_Var_Samp_Fields>;
  variance?: Maybe<Stock_Item_Variance_Fields>;
};


/** aggregate fields of "stock_item" */
export type Stock_Item_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stock_Item_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stock_item" */
export type Stock_Item_Aggregate_Order_By = {
  avg?: Maybe<Stock_Item_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Stock_Item_Max_Order_By>;
  min?: Maybe<Stock_Item_Min_Order_By>;
  stddev?: Maybe<Stock_Item_Stddev_Order_By>;
  stddev_pop?: Maybe<Stock_Item_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Stock_Item_Stddev_Samp_Order_By>;
  sum?: Maybe<Stock_Item_Sum_Order_By>;
  var_pop?: Maybe<Stock_Item_Var_Pop_Order_By>;
  var_samp?: Maybe<Stock_Item_Var_Samp_Order_By>;
  variance?: Maybe<Stock_Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stock_item" */
export type Stock_Item_Arr_Rel_Insert_Input = {
  data: Array<Stock_Item_Insert_Input>;
  on_conflict?: Maybe<Stock_Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Stock_Item_Avg_Fields = {
  __typename?: 'stock_item_avg_fields';
  id?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stock_item" */
export type Stock_Item_Avg_Order_By = {
  id?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stock_item". All fields are combined with a logical 'AND'. */
export type Stock_Item_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stock_Item_Bool_Exp>>>;
  _not?: Maybe<Stock_Item_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stock_Item_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  photoUrl?: Maybe<String_Comparison_Exp>;
  r_id?: Maybe<Int_Comparison_Exp>;
  s_date?: Maybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "stock_item" */
export enum Stock_Item_Constraint {
  /** unique or primary key constraint */
  StockItemPkey = 'stock_item_pkey'
}

/** input type for incrementing integer column in table "stock_item" */
export type Stock_Item_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  r_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "stock_item" */
export type Stock_Item_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  photoUrl?: Maybe<Scalars['String']>;
  r_id?: Maybe<Scalars['Int']>;
  s_date?: Maybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Stock_Item_Max_Fields = {
  __typename?: 'stock_item_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  photoUrl?: Maybe<Scalars['String']>;
  r_id?: Maybe<Scalars['Int']>;
  s_date?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "stock_item" */
export type Stock_Item_Max_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  photoUrl?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  s_date?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stock_Item_Min_Fields = {
  __typename?: 'stock_item_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  photoUrl?: Maybe<Scalars['String']>;
  r_id?: Maybe<Scalars['Int']>;
  s_date?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "stock_item" */
export type Stock_Item_Min_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  photoUrl?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  s_date?: Maybe<Order_By>;
};

/** response of any mutation on the table "stock_item" */
export type Stock_Item_Mutation_Response = {
  __typename?: 'stock_item_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stock_Item>;
};

/** input type for inserting object relation for remote table "stock_item" */
export type Stock_Item_Obj_Rel_Insert_Input = {
  data: Stock_Item_Insert_Input;
  on_conflict?: Maybe<Stock_Item_On_Conflict>;
};

/** on conflict condition type for table "stock_item" */
export type Stock_Item_On_Conflict = {
  constraint: Stock_Item_Constraint;
  update_columns: Array<Stock_Item_Update_Column>;
  where?: Maybe<Stock_Item_Bool_Exp>;
};

/** ordering options when selecting data from "stock_item" */
export type Stock_Item_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  photoUrl?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  s_date?: Maybe<Order_By>;
};

/** primary key columns input for table: "stock_item" */
export type Stock_Item_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "stock_item" */
export enum Stock_Item_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoUrl = 'photoUrl',
  /** column name */
  RId = 'r_id',
  /** column name */
  SDate = 's_date'
}

/** input type for updating data in table "stock_item" */
export type Stock_Item_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  photoUrl?: Maybe<Scalars['String']>;
  r_id?: Maybe<Scalars['Int']>;
  s_date?: Maybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Stock_Item_Stddev_Fields = {
  __typename?: 'stock_item_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stock_item" */
export type Stock_Item_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stock_Item_Stddev_Pop_Fields = {
  __typename?: 'stock_item_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stock_item" */
export type Stock_Item_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stock_Item_Stddev_Samp_Fields = {
  __typename?: 'stock_item_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stock_item" */
export type Stock_Item_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Stock_Item_Sum_Fields = {
  __typename?: 'stock_item_sum_fields';
  id?: Maybe<Scalars['Int']>;
  r_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "stock_item" */
export type Stock_Item_Sum_Order_By = {
  id?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
};

/** update columns of table "stock_item" */
export enum Stock_Item_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoUrl = 'photoUrl',
  /** column name */
  RId = 'r_id',
  /** column name */
  SDate = 's_date'
}

/** aggregate var_pop on columns */
export type Stock_Item_Var_Pop_Fields = {
  __typename?: 'stock_item_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stock_item" */
export type Stock_Item_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stock_Item_Var_Samp_Fields = {
  __typename?: 'stock_item_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stock_item" */
export type Stock_Item_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Stock_Item_Variance_Fields = {
  __typename?: 'stock_item_variance_fields';
  id?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stock_item" */
export type Stock_Item_Variance_Order_By = {
  id?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Stock_Max_Fields = {
  __typename?: 'stock_max_fields';
  count?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  price?: Maybe<Scalars['money']>;
  r_id?: Maybe<Scalars['Int']>;
  startPrice?: Maybe<Scalars['money']>;
};

/** order by max() on columns of table "stock" */
export type Stock_Max_Order_By = {
  count?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  startPrice?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stock_Min_Fields = {
  __typename?: 'stock_min_fields';
  count?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  price?: Maybe<Scalars['money']>;
  r_id?: Maybe<Scalars['Int']>;
  startPrice?: Maybe<Scalars['money']>;
};

/** order by min() on columns of table "stock" */
export type Stock_Min_Order_By = {
  count?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  startPrice?: Maybe<Order_By>;
};

/** response of any mutation on the table "stock" */
export type Stock_Mutation_Response = {
  __typename?: 'stock_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stock>;
};

/** input type for inserting object relation for remote table "stock" */
export type Stock_Obj_Rel_Insert_Input = {
  data: Stock_Insert_Input;
  on_conflict?: Maybe<Stock_On_Conflict>;
};

/** on conflict condition type for table "stock" */
export type Stock_On_Conflict = {
  constraint: Stock_Constraint;
  update_columns: Array<Stock_Update_Column>;
  where?: Maybe<Stock_Bool_Exp>;
};

/** ordering options when selecting data from "stock" */
export type Stock_Order_By = {
  count?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  startPrice?: Maybe<Order_By>;
};

/** primary key columns input for table: "stock" */
export type Stock_Pk_Columns_Input = {
  date: Scalars['date'];
  r_id: Scalars['Int'];
};

/** select columns of table "stock" */
export enum Stock_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Date = 'date',
  /** column name */
  Price = 'price',
  /** column name */
  RId = 'r_id',
  /** column name */
  StartPrice = 'startPrice'
}

/** input type for updating data in table "stock" */
export type Stock_Set_Input = {
  count?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  price?: Maybe<Scalars['money']>;
  r_id?: Maybe<Scalars['Int']>;
  startPrice?: Maybe<Scalars['money']>;
};

/** aggregate stddev on columns */
export type Stock_Stddev_Fields = {
  __typename?: 'stock_stddev_fields';
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
  startPrice?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stock" */
export type Stock_Stddev_Order_By = {
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  startPrice?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stock_Stddev_Pop_Fields = {
  __typename?: 'stock_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
  startPrice?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stock" */
export type Stock_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  startPrice?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stock_Stddev_Samp_Fields = {
  __typename?: 'stock_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
  startPrice?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stock" */
export type Stock_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  startPrice?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Stock_Sum_Fields = {
  __typename?: 'stock_sum_fields';
  count?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
  r_id?: Maybe<Scalars['Int']>;
  startPrice?: Maybe<Scalars['money']>;
};

/** order by sum() on columns of table "stock" */
export type Stock_Sum_Order_By = {
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  startPrice?: Maybe<Order_By>;
};

/** update columns of table "stock" */
export enum Stock_Update_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Date = 'date',
  /** column name */
  Price = 'price',
  /** column name */
  RId = 'r_id',
  /** column name */
  StartPrice = 'startPrice'
}

/** aggregate var_pop on columns */
export type Stock_Var_Pop_Fields = {
  __typename?: 'stock_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
  startPrice?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stock" */
export type Stock_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  startPrice?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stock_Var_Samp_Fields = {
  __typename?: 'stock_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
  startPrice?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stock" */
export type Stock_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  startPrice?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Stock_Variance_Fields = {
  __typename?: 'stock_variance_fields';
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  r_id?: Maybe<Scalars['Float']>;
  startPrice?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stock" */
export type Stock_Variance_Order_By = {
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  r_id?: Maybe<Order_By>;
  startPrice?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "r_category" */
  r_category: Array<R_Category>;
  /** fetch aggregated fields from the table: "r_category" */
  r_category_aggregate: R_Category_Aggregate;
  /** fetch data from the table: "r_category" using primary key columns */
  r_category_by_pk?: Maybe<R_Category>;
  /** fetch data from the table: "r_type" */
  r_type: Array<R_Type>;
  /** fetch aggregated fields from the table: "r_type" */
  r_type_aggregate: R_Type_Aggregate;
  /** fetch data from the table: "r_type" using primary key columns */
  r_type_by_pk?: Maybe<R_Type>;
  /** fetch data from the table: "restaurant" */
  restaurant: Array<Restaurant>;
  /** fetch aggregated fields from the table: "restaurant" */
  restaurant_aggregate: Restaurant_Aggregate;
  /** fetch data from the table: "restaurant" using primary key columns */
  restaurant_by_pk?: Maybe<Restaurant>;
  /** fetch data from the table: "stock" */
  stock: Array<Stock>;
  /** fetch aggregated fields from the table: "stock" */
  stock_aggregate: Stock_Aggregate;
  /** fetch data from the table: "stock" using primary key columns */
  stock_by_pk?: Maybe<Stock>;
  /** fetch data from the table: "stock_item" */
  stock_item: Array<Stock_Item>;
  /** fetch aggregated fields from the table: "stock_item" */
  stock_item_aggregate: Stock_Item_Aggregate;
  /** fetch data from the table: "stock_item" using primary key columns */
  stock_item_by_pk?: Maybe<Stock_Item>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


/** subscription root */
export type Subscription_RootR_CategoryArgs = {
  distinct_on?: Maybe<Array<R_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<R_Category_Order_By>>;
  where?: Maybe<R_Category_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootR_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<R_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<R_Category_Order_By>>;
  where?: Maybe<R_Category_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootR_Category_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootR_TypeArgs = {
  distinct_on?: Maybe<Array<R_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<R_Type_Order_By>>;
  where?: Maybe<R_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootR_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<R_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<R_Type_Order_By>>;
  where?: Maybe<R_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootR_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRestaurantArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Order_By>>;
  where?: Maybe<Restaurant_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestaurant_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Order_By>>;
  where?: Maybe<Restaurant_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestaurant_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootStockArgs = {
  distinct_on?: Maybe<Array<Stock_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Order_By>>;
  where?: Maybe<Stock_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Order_By>>;
  where?: Maybe<Stock_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_By_PkArgs = {
  date: Scalars['date'];
  r_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootStock_ItemArgs = {
  distinct_on?: Maybe<Array<Stock_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Item_Order_By>>;
  where?: Maybe<Stock_Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Stock_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stock_Item_Order_By>>;
  where?: Maybe<Stock_Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStock_Item_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  addressCoords?: Maybe<Scalars['point']>;
  addressCountryCode?: Maybe<Scalars['String']>;
  addressText?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  addressCoords?: Maybe<Point_Comparison_Exp>;
  addressCountryCode?: Maybe<String_Comparison_Exp>;
  addressText?: Maybe<String_Comparison_Exp>;
  firstName?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lastName?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing integer column in table "user" */
export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  addressCoords?: Maybe<Scalars['point']>;
  addressCountryCode?: Maybe<Scalars['String']>;
  addressText?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  addressCountryCode?: Maybe<Scalars['String']>;
  addressText?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  addressCountryCode?: Maybe<Order_By>;
  addressText?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  addressCountryCode?: Maybe<Scalars['String']>;
  addressText?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  addressCountryCode?: Maybe<Order_By>;
  addressText?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  addressCoords?: Maybe<Order_By>;
  addressCountryCode?: Maybe<Order_By>;
  addressText?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  AddressCoords = 'addressCoords',
  /** column name */
  AddressCountryCode = 'addressCountryCode',
  /** column name */
  AddressText = 'addressText',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  addressCoords?: Maybe<Scalars['point']>;
  addressCountryCode?: Maybe<Scalars['String']>;
  addressText?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  AddressCoords = 'addressCoords',
  /** column name */
  AddressCountryCode = 'addressCountryCode',
  /** column name */
  AddressText = 'addressText',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


export type UpdateUserLocationMutationVariables = Exact<{
  id: Scalars['Int'];
  addressText?: Maybe<Scalars['String']>;
  addressCoords?: Maybe<Scalars['point']>;
  addressCountryCode?: Maybe<Scalars['String']>;
}>;


export type UpdateUserLocationMutation = (
  { __typename?: 'mutation_root' }
  & { update_user_by_pk?: Maybe<(
    { __typename?: 'user' }
    & Pick<User, 'addressCoords' | 'addressText' | 'addressCountryCode'>
  )> }
);

export type RestaurantQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RestaurantQuery = (
  { __typename?: 'query_root' }
  & { restaurant_by_pk?: Maybe<(
    { __typename?: 'restaurant' }
    & Pick<Restaurant, 'type' | 'startWednesday' | 'startTuesday' | 'startThursday' | 'startSunday' | 'startSaturday' | 'startMonday' | 'name' | 'startFriday' | 'id' | 'logoUrl' | 'category3' | 'category2' | 'category' | 'bkgUrl' | 'address'>
  )> }
);

export type RestaurantsQueryVariables = Exact<{ [key: string]: never; }>;


export type RestaurantsQuery = (
  { __typename?: 'query_root' }
  & { restaurant: Array<(
    { __typename?: 'restaurant' }
    & Pick<Restaurant, 'address' | 'bkgUrl' | 'category' | 'category2' | 'category3' | 'id' | 'logoUrl' | 'name' | 'startMonday' | 'startFriday' | 'startSaturday' | 'startSunday' | 'startThursday' | 'startWednesday' | 'startTuesday' | 'type'>
  )> }
);

export type UserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UserQuery = (
  { __typename?: 'query_root' }
  & { user_by_pk?: Maybe<(
    { __typename?: 'user' }
    & Pick<User, 'addressCoords' | 'addressText' | 'firstName' | 'id' | 'lastName' | 'addressCountryCode'>
  )> }
);


export const UpdateUserLocationDocument = gql`
    mutation UpdateUserLocation($id: Int!, $addressText: String, $addressCoords: point, $addressCountryCode: String) {
  update_user_by_pk(pk_columns: {id: $id}, _set: {addressText: $addressText, addressCoords: $addressCoords, addressCountryCode: $addressCountryCode}) {
    addressCoords
    addressText
    addressCountryCode
  }
}
    `;
export type UpdateUserLocationMutationFn = Apollo.MutationFunction<UpdateUserLocationMutation, UpdateUserLocationMutationVariables>;

/**
 * __useUpdateUserLocationMutation__
 *
 * To run a mutation, you first call `useUpdateUserLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserLocationMutation, { data, loading, error }] = useUpdateUserLocationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      addressText: // value for 'addressText'
 *      addressCoords: // value for 'addressCoords'
 *      addressCountryCode: // value for 'addressCountryCode'
 *   },
 * });
 */
export function useUpdateUserLocationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserLocationMutation, UpdateUserLocationMutationVariables>) {
        return Apollo.useMutation<UpdateUserLocationMutation, UpdateUserLocationMutationVariables>(UpdateUserLocationDocument, baseOptions);
      }
export type UpdateUserLocationMutationHookResult = ReturnType<typeof useUpdateUserLocationMutation>;
export type UpdateUserLocationMutationResult = Apollo.MutationResult<UpdateUserLocationMutation>;
export type UpdateUserLocationMutationOptions = Apollo.BaseMutationOptions<UpdateUserLocationMutation, UpdateUserLocationMutationVariables>;
export const RestaurantDocument = gql`
    query Restaurant($id: Int!) {
  restaurant_by_pk(id: $id) {
    type
    startWednesday
    startTuesday
    startThursday
    startSunday
    startSaturday
    startMonday
    name
    startFriday
    id
    logoUrl
    category3
    category2
    category
    bkgUrl
    address
  }
}
    `;

/**
 * __useRestaurantQuery__
 *
 * To run a query within a React component, call `useRestaurantQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRestaurantQuery(baseOptions?: Apollo.QueryHookOptions<RestaurantQuery, RestaurantQueryVariables>) {
        return Apollo.useQuery<RestaurantQuery, RestaurantQueryVariables>(RestaurantDocument, baseOptions);
      }
export function useRestaurantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestaurantQuery, RestaurantQueryVariables>) {
          return Apollo.useLazyQuery<RestaurantQuery, RestaurantQueryVariables>(RestaurantDocument, baseOptions);
        }
export type RestaurantQueryHookResult = ReturnType<typeof useRestaurantQuery>;
export type RestaurantLazyQueryHookResult = ReturnType<typeof useRestaurantLazyQuery>;
export type RestaurantQueryResult = Apollo.QueryResult<RestaurantQuery, RestaurantQueryVariables>;
export const RestaurantsDocument = gql`
    query Restaurants {
  restaurant {
    address
    bkgUrl
    category
    category2
    category3
    id
    logoUrl
    name
    startMonday
    startFriday
    startSaturday
    startSunday
    startThursday
    startWednesday
    startTuesday
    type
  }
}
    `;

/**
 * __useRestaurantsQuery__
 *
 * To run a query within a React component, call `useRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRestaurantsQuery(baseOptions?: Apollo.QueryHookOptions<RestaurantsQuery, RestaurantsQueryVariables>) {
        return Apollo.useQuery<RestaurantsQuery, RestaurantsQueryVariables>(RestaurantsDocument, baseOptions);
      }
export function useRestaurantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestaurantsQuery, RestaurantsQueryVariables>) {
          return Apollo.useLazyQuery<RestaurantsQuery, RestaurantsQueryVariables>(RestaurantsDocument, baseOptions);
        }
export type RestaurantsQueryHookResult = ReturnType<typeof useRestaurantsQuery>;
export type RestaurantsLazyQueryHookResult = ReturnType<typeof useRestaurantsLazyQuery>;
export type RestaurantsQueryResult = Apollo.QueryResult<RestaurantsQuery, RestaurantsQueryVariables>;
export const UserDocument = gql`
    query User($id: Int!) {
  user_by_pk(id: $id) {
    addressCoords
    addressText
    firstName
    id
    lastName
    addressCountryCode
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    