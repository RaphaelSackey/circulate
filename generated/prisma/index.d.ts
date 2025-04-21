
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model UserCommunity
 * 
 */
export type UserCommunity = $Result.DefaultSelection<Prisma.$UserCommunityPayload>
/**
 * Model Borrow
 * 
 */
export type Borrow = $Result.DefaultSelection<Prisma.$BorrowPayload>
/**
 * Model TrustLog
 * 
 */
export type TrustLog = $Result.DefaultSelection<Prisma.$TrustLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ItemStatus: {
  AVAILABLE: 'AVAILABLE',
  PENDING: 'PENDING',
  BORROWED: 'BORROWED',
  RETURNED: 'RETURNED'
};

export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus]


export const UserRole: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const BorrowStatus: {
  REQUESTED: 'REQUESTED',
  APPROVED: 'APPROVED',
  BORROWED: 'BORROWED',
  RETURNED: 'RETURNED',
  CANCELLED: 'CANCELLED'
};

export type BorrowStatus = (typeof BorrowStatus)[keyof typeof BorrowStatus]

}

export type ItemStatus = $Enums.ItemStatus

export const ItemStatus: typeof $Enums.ItemStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type BorrowStatus = $Enums.BorrowStatus

export const BorrowStatus: typeof $Enums.BorrowStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCommunity`: Exposes CRUD operations for the **UserCommunity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCommunities
    * const userCommunities = await prisma.userCommunity.findMany()
    * ```
    */
  get userCommunity(): Prisma.UserCommunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.borrow`: Exposes CRUD operations for the **Borrow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Borrows
    * const borrows = await prisma.borrow.findMany()
    * ```
    */
  get borrow(): Prisma.BorrowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trustLog`: Exposes CRUD operations for the **TrustLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrustLogs
    * const trustLogs = await prisma.trustLog.findMany()
    * ```
    */
  get trustLog(): Prisma.TrustLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Item: 'Item',
    Community: 'Community',
    UserCommunity: 'UserCommunity',
    Borrow: 'Borrow',
    TrustLog: 'TrustLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "item" | "community" | "userCommunity" | "borrow" | "trustLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      UserCommunity: {
        payload: Prisma.$UserCommunityPayload<ExtArgs>
        fields: Prisma.UserCommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCommunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCommunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCommunityPayload>
          }
          findFirst: {
            args: Prisma.UserCommunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCommunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCommunityPayload>
          }
          findMany: {
            args: Prisma.UserCommunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCommunityPayload>[]
          }
          create: {
            args: Prisma.UserCommunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCommunityPayload>
          }
          createMany: {
            args: Prisma.UserCommunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCommunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCommunityPayload>[]
          }
          delete: {
            args: Prisma.UserCommunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCommunityPayload>
          }
          update: {
            args: Prisma.UserCommunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCommunityPayload>
          }
          deleteMany: {
            args: Prisma.UserCommunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCommunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCommunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCommunityPayload>[]
          }
          upsert: {
            args: Prisma.UserCommunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCommunityPayload>
          }
          aggregate: {
            args: Prisma.UserCommunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCommunity>
          }
          groupBy: {
            args: Prisma.UserCommunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCommunityCountArgs<ExtArgs>
            result: $Utils.Optional<UserCommunityCountAggregateOutputType> | number
          }
        }
      }
      Borrow: {
        payload: Prisma.$BorrowPayload<ExtArgs>
        fields: Prisma.BorrowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BorrowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BorrowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowPayload>
          }
          findFirst: {
            args: Prisma.BorrowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BorrowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowPayload>
          }
          findMany: {
            args: Prisma.BorrowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowPayload>[]
          }
          create: {
            args: Prisma.BorrowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowPayload>
          }
          createMany: {
            args: Prisma.BorrowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BorrowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowPayload>[]
          }
          delete: {
            args: Prisma.BorrowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowPayload>
          }
          update: {
            args: Prisma.BorrowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowPayload>
          }
          deleteMany: {
            args: Prisma.BorrowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BorrowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BorrowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowPayload>[]
          }
          upsert: {
            args: Prisma.BorrowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowPayload>
          }
          aggregate: {
            args: Prisma.BorrowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBorrow>
          }
          groupBy: {
            args: Prisma.BorrowGroupByArgs<ExtArgs>
            result: $Utils.Optional<BorrowGroupByOutputType>[]
          }
          count: {
            args: Prisma.BorrowCountArgs<ExtArgs>
            result: $Utils.Optional<BorrowCountAggregateOutputType> | number
          }
        }
      }
      TrustLog: {
        payload: Prisma.$TrustLogPayload<ExtArgs>
        fields: Prisma.TrustLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrustLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrustLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrustLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrustLogPayload>
          }
          findFirst: {
            args: Prisma.TrustLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrustLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrustLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrustLogPayload>
          }
          findMany: {
            args: Prisma.TrustLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrustLogPayload>[]
          }
          create: {
            args: Prisma.TrustLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrustLogPayload>
          }
          createMany: {
            args: Prisma.TrustLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrustLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrustLogPayload>[]
          }
          delete: {
            args: Prisma.TrustLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrustLogPayload>
          }
          update: {
            args: Prisma.TrustLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrustLogPayload>
          }
          deleteMany: {
            args: Prisma.TrustLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrustLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrustLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrustLogPayload>[]
          }
          upsert: {
            args: Prisma.TrustLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrustLogPayload>
          }
          aggregate: {
            args: Prisma.TrustLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrustLog>
          }
          groupBy: {
            args: Prisma.TrustLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrustLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrustLogCountArgs<ExtArgs>
            result: $Utils.Optional<TrustLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    item?: ItemOmit
    community?: CommunityOmit
    userCommunity?: UserCommunityOmit
    borrow?: BorrowOmit
    trustLog?: TrustLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    items: number
    borrowings: number
    lendings: number
    userCommunities: number
    trustLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | UserCountOutputTypeCountItemsArgs
    borrowings?: boolean | UserCountOutputTypeCountBorrowingsArgs
    lendings?: boolean | UserCountOutputTypeCountLendingsArgs
    userCommunities?: boolean | UserCountOutputTypeCountUserCommunitiesArgs
    trustLogs?: boolean | UserCountOutputTypeCountTrustLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBorrowingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLendingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCommunityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTrustLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrustLogWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    borrowRecords: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowRecords?: boolean | ItemCountOutputTypeCountBorrowRecordsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountBorrowRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowWhereInput
  }


  /**
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    items: number
    members: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CommunityCountOutputTypeCountItemsArgs
    members?: boolean | CommunityCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCommunityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    trustScore: number | null
  }

  export type UserSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    trustScore: number | null
  }

  export type UserMinAggregateOutputType = {
    uid: string | null
    name: string | null
    profilePicture: string | null
    latitude: number | null
    longitude: number | null
    trustScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    uid: string | null
    name: string | null
    profilePicture: string | null
    latitude: number | null
    longitude: number | null
    trustScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    uid: number
    name: number
    profilePicture: number
    latitude: number
    longitude: number
    trustScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    trustScore?: true
  }

  export type UserSumAggregateInputType = {
    latitude?: true
    longitude?: true
    trustScore?: true
  }

  export type UserMinAggregateInputType = {
    uid?: true
    name?: true
    profilePicture?: true
    latitude?: true
    longitude?: true
    trustScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    uid?: true
    name?: true
    profilePicture?: true
    latitude?: true
    longitude?: true
    trustScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    uid?: true
    name?: true
    profilePicture?: true
    latitude?: true
    longitude?: true
    trustScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    uid: string
    name: string | null
    profilePicture: string | null
    latitude: number | null
    longitude: number | null
    trustScore: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    name?: boolean
    profilePicture?: boolean
    latitude?: boolean
    longitude?: boolean
    trustScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | User$itemsArgs<ExtArgs>
    borrowings?: boolean | User$borrowingsArgs<ExtArgs>
    lendings?: boolean | User$lendingsArgs<ExtArgs>
    userCommunities?: boolean | User$userCommunitiesArgs<ExtArgs>
    trustLogs?: boolean | User$trustLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    name?: boolean
    profilePicture?: boolean
    latitude?: boolean
    longitude?: boolean
    trustScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    name?: boolean
    profilePicture?: boolean
    latitude?: boolean
    longitude?: boolean
    trustScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    uid?: boolean
    name?: boolean
    profilePicture?: boolean
    latitude?: boolean
    longitude?: boolean
    trustScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "name" | "profilePicture" | "latitude" | "longitude" | "trustScore" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | User$itemsArgs<ExtArgs>
    borrowings?: boolean | User$borrowingsArgs<ExtArgs>
    lendings?: boolean | User$lendingsArgs<ExtArgs>
    userCommunities?: boolean | User$userCommunitiesArgs<ExtArgs>
    trustLogs?: boolean | User$trustLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      items: Prisma.$ItemPayload<ExtArgs>[]
      borrowings: Prisma.$BorrowPayload<ExtArgs>[]
      lendings: Prisma.$BorrowPayload<ExtArgs>[]
      userCommunities: Prisma.$UserCommunityPayload<ExtArgs>[]
      trustLogs: Prisma.$TrustLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      name: string | null
      profilePicture: string | null
      latitude: number | null
      longitude: number | null
      trustScore: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const userWithUidOnly = await prisma.user.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `uid`
     * const userWithUidOnly = await prisma.user.createManyAndReturn({
     *   select: { uid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `uid`
     * const userWithUidOnly = await prisma.user.updateManyAndReturn({
     *   select: { uid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends User$itemsArgs<ExtArgs> = {}>(args?: Subset<T, User$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    borrowings<T extends User$borrowingsArgs<ExtArgs> = {}>(args?: Subset<T, User$borrowingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lendings<T extends User$lendingsArgs<ExtArgs> = {}>(args?: Subset<T, User$lendingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userCommunities<T extends User$userCommunitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$userCommunitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trustLogs<T extends User$trustLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$trustLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrustLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly uid: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly latitude: FieldRef<"User", 'Float'>
    readonly longitude: FieldRef<"User", 'Float'>
    readonly trustScore: FieldRef<"User", 'Float'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.items
   */
  export type User$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * User.borrowings
   */
  export type User$borrowingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowInclude<ExtArgs> | null
    where?: BorrowWhereInput
    orderBy?: BorrowOrderByWithRelationInput | BorrowOrderByWithRelationInput[]
    cursor?: BorrowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowScalarFieldEnum | BorrowScalarFieldEnum[]
  }

  /**
   * User.lendings
   */
  export type User$lendingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowInclude<ExtArgs> | null
    where?: BorrowWhereInput
    orderBy?: BorrowOrderByWithRelationInput | BorrowOrderByWithRelationInput[]
    cursor?: BorrowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowScalarFieldEnum | BorrowScalarFieldEnum[]
  }

  /**
   * User.userCommunities
   */
  export type User$userCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityInclude<ExtArgs> | null
    where?: UserCommunityWhereInput
    orderBy?: UserCommunityOrderByWithRelationInput | UserCommunityOrderByWithRelationInput[]
    cursor?: UserCommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCommunityScalarFieldEnum | UserCommunityScalarFieldEnum[]
  }

  /**
   * User.trustLogs
   */
  export type User$trustLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrustLog
     */
    select?: TrustLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrustLog
     */
    omit?: TrustLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrustLogInclude<ExtArgs> | null
    where?: TrustLogWhereInput
    orderBy?: TrustLogOrderByWithRelationInput | TrustLogOrderByWithRelationInput[]
    cursor?: TrustLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrustLogScalarFieldEnum | TrustLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    communityId: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    communityId: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    status: $Enums.ItemStatus | null
    latitude: number | null
    longitude: number | null
    ownerId: string | null
    communityId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    status: $Enums.ItemStatus | null
    latitude: number | null
    longitude: number | null
    ownerId: string | null
    communityId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    status: number
    latitude: number
    longitude: number
    ownerId: number
    communityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    communityId?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    communityId?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    latitude?: true
    longitude?: true
    ownerId?: true
    communityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    latitude?: true
    longitude?: true
    ownerId?: true
    communityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    status?: true
    latitude?: true
    longitude?: true
    ownerId?: true
    communityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    name: string
    description: string | null
    imageUrl: string[]
    status: $Enums.ItemStatus
    latitude: number
    longitude: number
    ownerId: string
    communityId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    ownerId?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | Item$communityArgs<ExtArgs>
    borrowRecords?: boolean | Item$borrowRecordsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    ownerId?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | Item$communityArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    ownerId?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | Item$communityArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    ownerId?: boolean
    communityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl" | "status" | "latitude" | "longitude" | "ownerId" | "communityId" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | Item$communityArgs<ExtArgs>
    borrowRecords?: boolean | Item$borrowRecordsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | Item$communityArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | Item$communityArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      community: Prisma.$CommunityPayload<ExtArgs> | null
      borrowRecords: Prisma.$BorrowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      imageUrl: string[]
      status: $Enums.ItemStatus
      latitude: number
      longitude: number
      ownerId: string
      communityId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    community<T extends Item$communityArgs<ExtArgs> = {}>(args?: Subset<T, Item$communityArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    borrowRecords<T extends Item$borrowRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Item$borrowRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly name: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly imageUrl: FieldRef<"Item", 'String[]'>
    readonly status: FieldRef<"Item", 'ItemStatus'>
    readonly latitude: FieldRef<"Item", 'Float'>
    readonly longitude: FieldRef<"Item", 'Float'>
    readonly ownerId: FieldRef<"Item", 'String'>
    readonly communityId: FieldRef<"Item", 'Int'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.community
   */
  export type Item$communityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
  }

  /**
   * Item.borrowRecords
   */
  export type Item$borrowRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowInclude<ExtArgs> | null
    where?: BorrowWhereInput
    orderBy?: BorrowOrderByWithRelationInput | BorrowOrderByWithRelationInput[]
    cursor?: BorrowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowScalarFieldEnum | BorrowScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CommunitySumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CommunityMinAggregateOutputType = {
    id: number | null
    name: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    name: number
    latitude: number
    longitude: number
    createdAt: number
    _all: number
  }


  export type CommunityAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type CommunitySumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type CommunityMinAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _avg?: CommunityAvgAggregateInputType
    _sum?: CommunitySumAggregateInputType
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: number
    name: string
    latitude: number
    longitude: number
    createdAt: Date
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    items?: boolean | Community$itemsArgs<ExtArgs>
    members?: boolean | Community$membersArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }

  export type CommunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "latitude" | "longitude" | "createdAt", ExtArgs["result"]["community"]>
  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Community$itemsArgs<ExtArgs>
    members?: boolean | Community$membersArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CommunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      items: Prisma.$ItemPayload<ExtArgs>[]
      members: Prisma.$UserCommunityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      latitude: number
      longitude: number
      createdAt: Date
    }, ExtArgs["result"]["community"]>
    composites: {}
  }

  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityFindUniqueArgs>(args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Community that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityFindFirstArgs>(args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityFindManyArgs>(args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
     */
    create<T extends CommunityCreateArgs>(args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communities.
     * @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityCreateManyArgs>(args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communities and returns the data saved in the database.
     * @param {CommunityCreateManyAndReturnArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
     */
    delete<T extends CommunityDeleteArgs>(args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityUpdateArgs>(args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityDeleteManyArgs>(args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityUpdateManyArgs>(args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities and returns the data updated in the database.
     * @param {CommunityUpdateManyAndReturnArgs} args - Arguments to update many Communities.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunityUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
     */
    upsert<T extends CommunityUpsertArgs>(args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Community$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Community$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Community$membersArgs<ExtArgs> = {}>(args?: Subset<T, Community$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Community model
   */
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'Int'>
    readonly name: FieldRef<"Community", 'String'>
    readonly latitude: FieldRef<"Community", 'Float'>
    readonly longitude: FieldRef<"Community", 'Float'>
    readonly createdAt: FieldRef<"Community", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }

  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Community createManyAndReturn
   */
  export type CommunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
  }

  /**
   * Community updateManyAndReturn
   */
  export type CommunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
  }

  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }

  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to delete.
     */
    limit?: number
  }

  /**
   * Community.items
   */
  export type Community$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Community.members
   */
  export type Community$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityInclude<ExtArgs> | null
    where?: UserCommunityWhereInput
    orderBy?: UserCommunityOrderByWithRelationInput | UserCommunityOrderByWithRelationInput[]
    cursor?: UserCommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCommunityScalarFieldEnum | UserCommunityScalarFieldEnum[]
  }

  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
  }


  /**
   * Model UserCommunity
   */

  export type AggregateUserCommunity = {
    _count: UserCommunityCountAggregateOutputType | null
    _avg: UserCommunityAvgAggregateOutputType | null
    _sum: UserCommunitySumAggregateOutputType | null
    _min: UserCommunityMinAggregateOutputType | null
    _max: UserCommunityMaxAggregateOutputType | null
  }

  export type UserCommunityAvgAggregateOutputType = {
    communityId: number | null
  }

  export type UserCommunitySumAggregateOutputType = {
    communityId: number | null
  }

  export type UserCommunityMinAggregateOutputType = {
    userId: string | null
    communityId: number | null
    role: $Enums.UserRole | null
  }

  export type UserCommunityMaxAggregateOutputType = {
    userId: string | null
    communityId: number | null
    role: $Enums.UserRole | null
  }

  export type UserCommunityCountAggregateOutputType = {
    userId: number
    communityId: number
    role: number
    _all: number
  }


  export type UserCommunityAvgAggregateInputType = {
    communityId?: true
  }

  export type UserCommunitySumAggregateInputType = {
    communityId?: true
  }

  export type UserCommunityMinAggregateInputType = {
    userId?: true
    communityId?: true
    role?: true
  }

  export type UserCommunityMaxAggregateInputType = {
    userId?: true
    communityId?: true
    role?: true
  }

  export type UserCommunityCountAggregateInputType = {
    userId?: true
    communityId?: true
    role?: true
    _all?: true
  }

  export type UserCommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCommunity to aggregate.
     */
    where?: UserCommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCommunities to fetch.
     */
    orderBy?: UserCommunityOrderByWithRelationInput | UserCommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCommunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCommunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCommunities
    **/
    _count?: true | UserCommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCommunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCommunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCommunityMaxAggregateInputType
  }

  export type GetUserCommunityAggregateType<T extends UserCommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCommunity[P]>
      : GetScalarType<T[P], AggregateUserCommunity[P]>
  }




  export type UserCommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCommunityWhereInput
    orderBy?: UserCommunityOrderByWithAggregationInput | UserCommunityOrderByWithAggregationInput[]
    by: UserCommunityScalarFieldEnum[] | UserCommunityScalarFieldEnum
    having?: UserCommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCommunityCountAggregateInputType | true
    _avg?: UserCommunityAvgAggregateInputType
    _sum?: UserCommunitySumAggregateInputType
    _min?: UserCommunityMinAggregateInputType
    _max?: UserCommunityMaxAggregateInputType
  }

  export type UserCommunityGroupByOutputType = {
    userId: string
    communityId: number
    role: $Enums.UserRole
    _count: UserCommunityCountAggregateOutputType | null
    _avg: UserCommunityAvgAggregateOutputType | null
    _sum: UserCommunitySumAggregateOutputType | null
    _min: UserCommunityMinAggregateOutputType | null
    _max: UserCommunityMaxAggregateOutputType | null
  }

  type GetUserCommunityGroupByPayload<T extends UserCommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCommunityGroupByOutputType[P]>
            : GetScalarType<T[P], UserCommunityGroupByOutputType[P]>
        }
      >
    >


  export type UserCommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    communityId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCommunity"]>

  export type UserCommunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    communityId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCommunity"]>

  export type UserCommunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    communityId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCommunity"]>

  export type UserCommunitySelectScalar = {
    userId?: boolean
    communityId?: boolean
    role?: boolean
  }

  export type UserCommunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "communityId" | "role", ExtArgs["result"]["userCommunity"]>
  export type UserCommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }
  export type UserCommunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }
  export type UserCommunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }

  export type $UserCommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCommunity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      community: Prisma.$CommunityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      communityId: number
      role: $Enums.UserRole
    }, ExtArgs["result"]["userCommunity"]>
    composites: {}
  }

  type UserCommunityGetPayload<S extends boolean | null | undefined | UserCommunityDefaultArgs> = $Result.GetResult<Prisma.$UserCommunityPayload, S>

  type UserCommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCommunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCommunityCountAggregateInputType | true
    }

  export interface UserCommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCommunity'], meta: { name: 'UserCommunity' } }
    /**
     * Find zero or one UserCommunity that matches the filter.
     * @param {UserCommunityFindUniqueArgs} args - Arguments to find a UserCommunity
     * @example
     * // Get one UserCommunity
     * const userCommunity = await prisma.userCommunity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCommunityFindUniqueArgs>(args: SelectSubset<T, UserCommunityFindUniqueArgs<ExtArgs>>): Prisma__UserCommunityClient<$Result.GetResult<Prisma.$UserCommunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCommunity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCommunityFindUniqueOrThrowArgs} args - Arguments to find a UserCommunity
     * @example
     * // Get one UserCommunity
     * const userCommunity = await prisma.userCommunity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCommunityFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCommunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCommunityClient<$Result.GetResult<Prisma.$UserCommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCommunity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCommunityFindFirstArgs} args - Arguments to find a UserCommunity
     * @example
     * // Get one UserCommunity
     * const userCommunity = await prisma.userCommunity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCommunityFindFirstArgs>(args?: SelectSubset<T, UserCommunityFindFirstArgs<ExtArgs>>): Prisma__UserCommunityClient<$Result.GetResult<Prisma.$UserCommunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCommunity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCommunityFindFirstOrThrowArgs} args - Arguments to find a UserCommunity
     * @example
     * // Get one UserCommunity
     * const userCommunity = await prisma.userCommunity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCommunityFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCommunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCommunityClient<$Result.GetResult<Prisma.$UserCommunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCommunities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCommunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCommunities
     * const userCommunities = await prisma.userCommunity.findMany()
     * 
     * // Get first 10 UserCommunities
     * const userCommunities = await prisma.userCommunity.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userCommunityWithUserIdOnly = await prisma.userCommunity.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserCommunityFindManyArgs>(args?: SelectSubset<T, UserCommunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCommunity.
     * @param {UserCommunityCreateArgs} args - Arguments to create a UserCommunity.
     * @example
     * // Create one UserCommunity
     * const UserCommunity = await prisma.userCommunity.create({
     *   data: {
     *     // ... data to create a UserCommunity
     *   }
     * })
     * 
     */
    create<T extends UserCommunityCreateArgs>(args: SelectSubset<T, UserCommunityCreateArgs<ExtArgs>>): Prisma__UserCommunityClient<$Result.GetResult<Prisma.$UserCommunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCommunities.
     * @param {UserCommunityCreateManyArgs} args - Arguments to create many UserCommunities.
     * @example
     * // Create many UserCommunities
     * const userCommunity = await prisma.userCommunity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCommunityCreateManyArgs>(args?: SelectSubset<T, UserCommunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCommunities and returns the data saved in the database.
     * @param {UserCommunityCreateManyAndReturnArgs} args - Arguments to create many UserCommunities.
     * @example
     * // Create many UserCommunities
     * const userCommunity = await prisma.userCommunity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCommunities and only return the `userId`
     * const userCommunityWithUserIdOnly = await prisma.userCommunity.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCommunityCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCommunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCommunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCommunity.
     * @param {UserCommunityDeleteArgs} args - Arguments to delete one UserCommunity.
     * @example
     * // Delete one UserCommunity
     * const UserCommunity = await prisma.userCommunity.delete({
     *   where: {
     *     // ... filter to delete one UserCommunity
     *   }
     * })
     * 
     */
    delete<T extends UserCommunityDeleteArgs>(args: SelectSubset<T, UserCommunityDeleteArgs<ExtArgs>>): Prisma__UserCommunityClient<$Result.GetResult<Prisma.$UserCommunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCommunity.
     * @param {UserCommunityUpdateArgs} args - Arguments to update one UserCommunity.
     * @example
     * // Update one UserCommunity
     * const userCommunity = await prisma.userCommunity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCommunityUpdateArgs>(args: SelectSubset<T, UserCommunityUpdateArgs<ExtArgs>>): Prisma__UserCommunityClient<$Result.GetResult<Prisma.$UserCommunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCommunities.
     * @param {UserCommunityDeleteManyArgs} args - Arguments to filter UserCommunities to delete.
     * @example
     * // Delete a few UserCommunities
     * const { count } = await prisma.userCommunity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCommunityDeleteManyArgs>(args?: SelectSubset<T, UserCommunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCommunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCommunities
     * const userCommunity = await prisma.userCommunity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCommunityUpdateManyArgs>(args: SelectSubset<T, UserCommunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCommunities and returns the data updated in the database.
     * @param {UserCommunityUpdateManyAndReturnArgs} args - Arguments to update many UserCommunities.
     * @example
     * // Update many UserCommunities
     * const userCommunity = await prisma.userCommunity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCommunities and only return the `userId`
     * const userCommunityWithUserIdOnly = await prisma.userCommunity.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCommunityUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCommunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCommunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCommunity.
     * @param {UserCommunityUpsertArgs} args - Arguments to update or create a UserCommunity.
     * @example
     * // Update or create a UserCommunity
     * const userCommunity = await prisma.userCommunity.upsert({
     *   create: {
     *     // ... data to create a UserCommunity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCommunity we want to update
     *   }
     * })
     */
    upsert<T extends UserCommunityUpsertArgs>(args: SelectSubset<T, UserCommunityUpsertArgs<ExtArgs>>): Prisma__UserCommunityClient<$Result.GetResult<Prisma.$UserCommunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCommunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCommunityCountArgs} args - Arguments to filter UserCommunities to count.
     * @example
     * // Count the number of UserCommunities
     * const count = await prisma.userCommunity.count({
     *   where: {
     *     // ... the filter for the UserCommunities we want to count
     *   }
     * })
    **/
    count<T extends UserCommunityCountArgs>(
      args?: Subset<T, UserCommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCommunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCommunityAggregateArgs>(args: Subset<T, UserCommunityAggregateArgs>): Prisma.PrismaPromise<GetUserCommunityAggregateType<T>>

    /**
     * Group by UserCommunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCommunityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCommunityGroupByArgs['orderBy'] }
        : { orderBy?: UserCommunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCommunity model
   */
  readonly fields: UserCommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCommunity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCommunity model
   */
  interface UserCommunityFieldRefs {
    readonly userId: FieldRef<"UserCommunity", 'String'>
    readonly communityId: FieldRef<"UserCommunity", 'Int'>
    readonly role: FieldRef<"UserCommunity", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * UserCommunity findUnique
   */
  export type UserCommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityInclude<ExtArgs> | null
    /**
     * Filter, which UserCommunity to fetch.
     */
    where: UserCommunityWhereUniqueInput
  }

  /**
   * UserCommunity findUniqueOrThrow
   */
  export type UserCommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityInclude<ExtArgs> | null
    /**
     * Filter, which UserCommunity to fetch.
     */
    where: UserCommunityWhereUniqueInput
  }

  /**
   * UserCommunity findFirst
   */
  export type UserCommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityInclude<ExtArgs> | null
    /**
     * Filter, which UserCommunity to fetch.
     */
    where?: UserCommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCommunities to fetch.
     */
    orderBy?: UserCommunityOrderByWithRelationInput | UserCommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCommunities.
     */
    cursor?: UserCommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCommunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCommunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCommunities.
     */
    distinct?: UserCommunityScalarFieldEnum | UserCommunityScalarFieldEnum[]
  }

  /**
   * UserCommunity findFirstOrThrow
   */
  export type UserCommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityInclude<ExtArgs> | null
    /**
     * Filter, which UserCommunity to fetch.
     */
    where?: UserCommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCommunities to fetch.
     */
    orderBy?: UserCommunityOrderByWithRelationInput | UserCommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCommunities.
     */
    cursor?: UserCommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCommunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCommunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCommunities.
     */
    distinct?: UserCommunityScalarFieldEnum | UserCommunityScalarFieldEnum[]
  }

  /**
   * UserCommunity findMany
   */
  export type UserCommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityInclude<ExtArgs> | null
    /**
     * Filter, which UserCommunities to fetch.
     */
    where?: UserCommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCommunities to fetch.
     */
    orderBy?: UserCommunityOrderByWithRelationInput | UserCommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCommunities.
     */
    cursor?: UserCommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCommunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCommunities.
     */
    skip?: number
    distinct?: UserCommunityScalarFieldEnum | UserCommunityScalarFieldEnum[]
  }

  /**
   * UserCommunity create
   */
  export type UserCommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCommunity.
     */
    data: XOR<UserCommunityCreateInput, UserCommunityUncheckedCreateInput>
  }

  /**
   * UserCommunity createMany
   */
  export type UserCommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCommunities.
     */
    data: UserCommunityCreateManyInput | UserCommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCommunity createManyAndReturn
   */
  export type UserCommunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * The data used to create many UserCommunities.
     */
    data: UserCommunityCreateManyInput | UserCommunityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCommunity update
   */
  export type UserCommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCommunity.
     */
    data: XOR<UserCommunityUpdateInput, UserCommunityUncheckedUpdateInput>
    /**
     * Choose, which UserCommunity to update.
     */
    where: UserCommunityWhereUniqueInput
  }

  /**
   * UserCommunity updateMany
   */
  export type UserCommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCommunities.
     */
    data: XOR<UserCommunityUpdateManyMutationInput, UserCommunityUncheckedUpdateManyInput>
    /**
     * Filter which UserCommunities to update
     */
    where?: UserCommunityWhereInput
    /**
     * Limit how many UserCommunities to update.
     */
    limit?: number
  }

  /**
   * UserCommunity updateManyAndReturn
   */
  export type UserCommunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * The data used to update UserCommunities.
     */
    data: XOR<UserCommunityUpdateManyMutationInput, UserCommunityUncheckedUpdateManyInput>
    /**
     * Filter which UserCommunities to update
     */
    where?: UserCommunityWhereInput
    /**
     * Limit how many UserCommunities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCommunity upsert
   */
  export type UserCommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCommunity to update in case it exists.
     */
    where: UserCommunityWhereUniqueInput
    /**
     * In case the UserCommunity found by the `where` argument doesn't exist, create a new UserCommunity with this data.
     */
    create: XOR<UserCommunityCreateInput, UserCommunityUncheckedCreateInput>
    /**
     * In case the UserCommunity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCommunityUpdateInput, UserCommunityUncheckedUpdateInput>
  }

  /**
   * UserCommunity delete
   */
  export type UserCommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityInclude<ExtArgs> | null
    /**
     * Filter which UserCommunity to delete.
     */
    where: UserCommunityWhereUniqueInput
  }

  /**
   * UserCommunity deleteMany
   */
  export type UserCommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCommunities to delete
     */
    where?: UserCommunityWhereInput
    /**
     * Limit how many UserCommunities to delete.
     */
    limit?: number
  }

  /**
   * UserCommunity without action
   */
  export type UserCommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCommunity
     */
    select?: UserCommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCommunity
     */
    omit?: UserCommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCommunityInclude<ExtArgs> | null
  }


  /**
   * Model Borrow
   */

  export type AggregateBorrow = {
    _count: BorrowCountAggregateOutputType | null
    _avg: BorrowAvgAggregateOutputType | null
    _sum: BorrowSumAggregateOutputType | null
    _min: BorrowMinAggregateOutputType | null
    _max: BorrowMaxAggregateOutputType | null
  }

  export type BorrowAvgAggregateOutputType = {
    id: number | null
    itemId: number | null
  }

  export type BorrowSumAggregateOutputType = {
    id: number | null
    itemId: number | null
  }

  export type BorrowMinAggregateOutputType = {
    id: number | null
    borrowerId: string | null
    ownerId: string | null
    itemId: number | null
    status: $Enums.BorrowStatus | null
    requestedAt: Date | null
    approvedAt: Date | null
    borrowedAt: Date | null
    returnedAt: Date | null
  }

  export type BorrowMaxAggregateOutputType = {
    id: number | null
    borrowerId: string | null
    ownerId: string | null
    itemId: number | null
    status: $Enums.BorrowStatus | null
    requestedAt: Date | null
    approvedAt: Date | null
    borrowedAt: Date | null
    returnedAt: Date | null
  }

  export type BorrowCountAggregateOutputType = {
    id: number
    borrowerId: number
    ownerId: number
    itemId: number
    status: number
    requestedAt: number
    approvedAt: number
    borrowedAt: number
    returnedAt: number
    _all: number
  }


  export type BorrowAvgAggregateInputType = {
    id?: true
    itemId?: true
  }

  export type BorrowSumAggregateInputType = {
    id?: true
    itemId?: true
  }

  export type BorrowMinAggregateInputType = {
    id?: true
    borrowerId?: true
    ownerId?: true
    itemId?: true
    status?: true
    requestedAt?: true
    approvedAt?: true
    borrowedAt?: true
    returnedAt?: true
  }

  export type BorrowMaxAggregateInputType = {
    id?: true
    borrowerId?: true
    ownerId?: true
    itemId?: true
    status?: true
    requestedAt?: true
    approvedAt?: true
    borrowedAt?: true
    returnedAt?: true
  }

  export type BorrowCountAggregateInputType = {
    id?: true
    borrowerId?: true
    ownerId?: true
    itemId?: true
    status?: true
    requestedAt?: true
    approvedAt?: true
    borrowedAt?: true
    returnedAt?: true
    _all?: true
  }

  export type BorrowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Borrow to aggregate.
     */
    where?: BorrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrows to fetch.
     */
    orderBy?: BorrowOrderByWithRelationInput | BorrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BorrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Borrows
    **/
    _count?: true | BorrowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BorrowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BorrowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BorrowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BorrowMaxAggregateInputType
  }

  export type GetBorrowAggregateType<T extends BorrowAggregateArgs> = {
        [P in keyof T & keyof AggregateBorrow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBorrow[P]>
      : GetScalarType<T[P], AggregateBorrow[P]>
  }




  export type BorrowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowWhereInput
    orderBy?: BorrowOrderByWithAggregationInput | BorrowOrderByWithAggregationInput[]
    by: BorrowScalarFieldEnum[] | BorrowScalarFieldEnum
    having?: BorrowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BorrowCountAggregateInputType | true
    _avg?: BorrowAvgAggregateInputType
    _sum?: BorrowSumAggregateInputType
    _min?: BorrowMinAggregateInputType
    _max?: BorrowMaxAggregateInputType
  }

  export type BorrowGroupByOutputType = {
    id: number
    borrowerId: string
    ownerId: string
    itemId: number
    status: $Enums.BorrowStatus
    requestedAt: Date
    approvedAt: Date | null
    borrowedAt: Date | null
    returnedAt: Date | null
    _count: BorrowCountAggregateOutputType | null
    _avg: BorrowAvgAggregateOutputType | null
    _sum: BorrowSumAggregateOutputType | null
    _min: BorrowMinAggregateOutputType | null
    _max: BorrowMaxAggregateOutputType | null
  }

  type GetBorrowGroupByPayload<T extends BorrowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BorrowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BorrowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BorrowGroupByOutputType[P]>
            : GetScalarType<T[P], BorrowGroupByOutputType[P]>
        }
      >
    >


  export type BorrowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    borrowerId?: boolean
    ownerId?: boolean
    itemId?: boolean
    status?: boolean
    requestedAt?: boolean
    approvedAt?: boolean
    borrowedAt?: boolean
    returnedAt?: boolean
    borrower?: boolean | UserDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrow"]>

  export type BorrowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    borrowerId?: boolean
    ownerId?: boolean
    itemId?: boolean
    status?: boolean
    requestedAt?: boolean
    approvedAt?: boolean
    borrowedAt?: boolean
    returnedAt?: boolean
    borrower?: boolean | UserDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrow"]>

  export type BorrowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    borrowerId?: boolean
    ownerId?: boolean
    itemId?: boolean
    status?: boolean
    requestedAt?: boolean
    approvedAt?: boolean
    borrowedAt?: boolean
    returnedAt?: boolean
    borrower?: boolean | UserDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrow"]>

  export type BorrowSelectScalar = {
    id?: boolean
    borrowerId?: boolean
    ownerId?: boolean
    itemId?: boolean
    status?: boolean
    requestedAt?: boolean
    approvedAt?: boolean
    borrowedAt?: boolean
    returnedAt?: boolean
  }

  export type BorrowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "borrowerId" | "ownerId" | "itemId" | "status" | "requestedAt" | "approvedAt" | "borrowedAt" | "returnedAt", ExtArgs["result"]["borrow"]>
  export type BorrowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrower?: boolean | UserDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type BorrowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrower?: boolean | UserDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type BorrowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrower?: boolean | UserDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $BorrowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Borrow"
    objects: {
      borrower: Prisma.$UserPayload<ExtArgs>
      owner: Prisma.$UserPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      borrowerId: string
      ownerId: string
      itemId: number
      status: $Enums.BorrowStatus
      requestedAt: Date
      approvedAt: Date | null
      borrowedAt: Date | null
      returnedAt: Date | null
    }, ExtArgs["result"]["borrow"]>
    composites: {}
  }

  type BorrowGetPayload<S extends boolean | null | undefined | BorrowDefaultArgs> = $Result.GetResult<Prisma.$BorrowPayload, S>

  type BorrowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BorrowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BorrowCountAggregateInputType | true
    }

  export interface BorrowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Borrow'], meta: { name: 'Borrow' } }
    /**
     * Find zero or one Borrow that matches the filter.
     * @param {BorrowFindUniqueArgs} args - Arguments to find a Borrow
     * @example
     * // Get one Borrow
     * const borrow = await prisma.borrow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BorrowFindUniqueArgs>(args: SelectSubset<T, BorrowFindUniqueArgs<ExtArgs>>): Prisma__BorrowClient<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Borrow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BorrowFindUniqueOrThrowArgs} args - Arguments to find a Borrow
     * @example
     * // Get one Borrow
     * const borrow = await prisma.borrow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BorrowFindUniqueOrThrowArgs>(args: SelectSubset<T, BorrowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BorrowClient<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Borrow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowFindFirstArgs} args - Arguments to find a Borrow
     * @example
     * // Get one Borrow
     * const borrow = await prisma.borrow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BorrowFindFirstArgs>(args?: SelectSubset<T, BorrowFindFirstArgs<ExtArgs>>): Prisma__BorrowClient<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Borrow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowFindFirstOrThrowArgs} args - Arguments to find a Borrow
     * @example
     * // Get one Borrow
     * const borrow = await prisma.borrow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BorrowFindFirstOrThrowArgs>(args?: SelectSubset<T, BorrowFindFirstOrThrowArgs<ExtArgs>>): Prisma__BorrowClient<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Borrows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Borrows
     * const borrows = await prisma.borrow.findMany()
     * 
     * // Get first 10 Borrows
     * const borrows = await prisma.borrow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const borrowWithIdOnly = await prisma.borrow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BorrowFindManyArgs>(args?: SelectSubset<T, BorrowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Borrow.
     * @param {BorrowCreateArgs} args - Arguments to create a Borrow.
     * @example
     * // Create one Borrow
     * const Borrow = await prisma.borrow.create({
     *   data: {
     *     // ... data to create a Borrow
     *   }
     * })
     * 
     */
    create<T extends BorrowCreateArgs>(args: SelectSubset<T, BorrowCreateArgs<ExtArgs>>): Prisma__BorrowClient<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Borrows.
     * @param {BorrowCreateManyArgs} args - Arguments to create many Borrows.
     * @example
     * // Create many Borrows
     * const borrow = await prisma.borrow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BorrowCreateManyArgs>(args?: SelectSubset<T, BorrowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Borrows and returns the data saved in the database.
     * @param {BorrowCreateManyAndReturnArgs} args - Arguments to create many Borrows.
     * @example
     * // Create many Borrows
     * const borrow = await prisma.borrow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Borrows and only return the `id`
     * const borrowWithIdOnly = await prisma.borrow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BorrowCreateManyAndReturnArgs>(args?: SelectSubset<T, BorrowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Borrow.
     * @param {BorrowDeleteArgs} args - Arguments to delete one Borrow.
     * @example
     * // Delete one Borrow
     * const Borrow = await prisma.borrow.delete({
     *   where: {
     *     // ... filter to delete one Borrow
     *   }
     * })
     * 
     */
    delete<T extends BorrowDeleteArgs>(args: SelectSubset<T, BorrowDeleteArgs<ExtArgs>>): Prisma__BorrowClient<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Borrow.
     * @param {BorrowUpdateArgs} args - Arguments to update one Borrow.
     * @example
     * // Update one Borrow
     * const borrow = await prisma.borrow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BorrowUpdateArgs>(args: SelectSubset<T, BorrowUpdateArgs<ExtArgs>>): Prisma__BorrowClient<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Borrows.
     * @param {BorrowDeleteManyArgs} args - Arguments to filter Borrows to delete.
     * @example
     * // Delete a few Borrows
     * const { count } = await prisma.borrow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BorrowDeleteManyArgs>(args?: SelectSubset<T, BorrowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Borrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Borrows
     * const borrow = await prisma.borrow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BorrowUpdateManyArgs>(args: SelectSubset<T, BorrowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Borrows and returns the data updated in the database.
     * @param {BorrowUpdateManyAndReturnArgs} args - Arguments to update many Borrows.
     * @example
     * // Update many Borrows
     * const borrow = await prisma.borrow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Borrows and only return the `id`
     * const borrowWithIdOnly = await prisma.borrow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BorrowUpdateManyAndReturnArgs>(args: SelectSubset<T, BorrowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Borrow.
     * @param {BorrowUpsertArgs} args - Arguments to update or create a Borrow.
     * @example
     * // Update or create a Borrow
     * const borrow = await prisma.borrow.upsert({
     *   create: {
     *     // ... data to create a Borrow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Borrow we want to update
     *   }
     * })
     */
    upsert<T extends BorrowUpsertArgs>(args: SelectSubset<T, BorrowUpsertArgs<ExtArgs>>): Prisma__BorrowClient<$Result.GetResult<Prisma.$BorrowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Borrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowCountArgs} args - Arguments to filter Borrows to count.
     * @example
     * // Count the number of Borrows
     * const count = await prisma.borrow.count({
     *   where: {
     *     // ... the filter for the Borrows we want to count
     *   }
     * })
    **/
    count<T extends BorrowCountArgs>(
      args?: Subset<T, BorrowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BorrowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Borrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BorrowAggregateArgs>(args: Subset<T, BorrowAggregateArgs>): Prisma.PrismaPromise<GetBorrowAggregateType<T>>

    /**
     * Group by Borrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BorrowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BorrowGroupByArgs['orderBy'] }
        : { orderBy?: BorrowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BorrowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBorrowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Borrow model
   */
  readonly fields: BorrowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Borrow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BorrowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    borrower<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Borrow model
   */
  interface BorrowFieldRefs {
    readonly id: FieldRef<"Borrow", 'Int'>
    readonly borrowerId: FieldRef<"Borrow", 'String'>
    readonly ownerId: FieldRef<"Borrow", 'String'>
    readonly itemId: FieldRef<"Borrow", 'Int'>
    readonly status: FieldRef<"Borrow", 'BorrowStatus'>
    readonly requestedAt: FieldRef<"Borrow", 'DateTime'>
    readonly approvedAt: FieldRef<"Borrow", 'DateTime'>
    readonly borrowedAt: FieldRef<"Borrow", 'DateTime'>
    readonly returnedAt: FieldRef<"Borrow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Borrow findUnique
   */
  export type BorrowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowInclude<ExtArgs> | null
    /**
     * Filter, which Borrow to fetch.
     */
    where: BorrowWhereUniqueInput
  }

  /**
   * Borrow findUniqueOrThrow
   */
  export type BorrowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowInclude<ExtArgs> | null
    /**
     * Filter, which Borrow to fetch.
     */
    where: BorrowWhereUniqueInput
  }

  /**
   * Borrow findFirst
   */
  export type BorrowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowInclude<ExtArgs> | null
    /**
     * Filter, which Borrow to fetch.
     */
    where?: BorrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrows to fetch.
     */
    orderBy?: BorrowOrderByWithRelationInput | BorrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Borrows.
     */
    cursor?: BorrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Borrows.
     */
    distinct?: BorrowScalarFieldEnum | BorrowScalarFieldEnum[]
  }

  /**
   * Borrow findFirstOrThrow
   */
  export type BorrowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowInclude<ExtArgs> | null
    /**
     * Filter, which Borrow to fetch.
     */
    where?: BorrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrows to fetch.
     */
    orderBy?: BorrowOrderByWithRelationInput | BorrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Borrows.
     */
    cursor?: BorrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Borrows.
     */
    distinct?: BorrowScalarFieldEnum | BorrowScalarFieldEnum[]
  }

  /**
   * Borrow findMany
   */
  export type BorrowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowInclude<ExtArgs> | null
    /**
     * Filter, which Borrows to fetch.
     */
    where?: BorrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrows to fetch.
     */
    orderBy?: BorrowOrderByWithRelationInput | BorrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Borrows.
     */
    cursor?: BorrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrows.
     */
    skip?: number
    distinct?: BorrowScalarFieldEnum | BorrowScalarFieldEnum[]
  }

  /**
   * Borrow create
   */
  export type BorrowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowInclude<ExtArgs> | null
    /**
     * The data needed to create a Borrow.
     */
    data: XOR<BorrowCreateInput, BorrowUncheckedCreateInput>
  }

  /**
   * Borrow createMany
   */
  export type BorrowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Borrows.
     */
    data: BorrowCreateManyInput | BorrowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Borrow createManyAndReturn
   */
  export type BorrowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * The data used to create many Borrows.
     */
    data: BorrowCreateManyInput | BorrowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Borrow update
   */
  export type BorrowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowInclude<ExtArgs> | null
    /**
     * The data needed to update a Borrow.
     */
    data: XOR<BorrowUpdateInput, BorrowUncheckedUpdateInput>
    /**
     * Choose, which Borrow to update.
     */
    where: BorrowWhereUniqueInput
  }

  /**
   * Borrow updateMany
   */
  export type BorrowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Borrows.
     */
    data: XOR<BorrowUpdateManyMutationInput, BorrowUncheckedUpdateManyInput>
    /**
     * Filter which Borrows to update
     */
    where?: BorrowWhereInput
    /**
     * Limit how many Borrows to update.
     */
    limit?: number
  }

  /**
   * Borrow updateManyAndReturn
   */
  export type BorrowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * The data used to update Borrows.
     */
    data: XOR<BorrowUpdateManyMutationInput, BorrowUncheckedUpdateManyInput>
    /**
     * Filter which Borrows to update
     */
    where?: BorrowWhereInput
    /**
     * Limit how many Borrows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Borrow upsert
   */
  export type BorrowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowInclude<ExtArgs> | null
    /**
     * The filter to search for the Borrow to update in case it exists.
     */
    where: BorrowWhereUniqueInput
    /**
     * In case the Borrow found by the `where` argument doesn't exist, create a new Borrow with this data.
     */
    create: XOR<BorrowCreateInput, BorrowUncheckedCreateInput>
    /**
     * In case the Borrow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BorrowUpdateInput, BorrowUncheckedUpdateInput>
  }

  /**
   * Borrow delete
   */
  export type BorrowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowInclude<ExtArgs> | null
    /**
     * Filter which Borrow to delete.
     */
    where: BorrowWhereUniqueInput
  }

  /**
   * Borrow deleteMany
   */
  export type BorrowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Borrows to delete
     */
    where?: BorrowWhereInput
    /**
     * Limit how many Borrows to delete.
     */
    limit?: number
  }

  /**
   * Borrow without action
   */
  export type BorrowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrow
     */
    select?: BorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrow
     */
    omit?: BorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowInclude<ExtArgs> | null
  }


  /**
   * Model TrustLog
   */

  export type AggregateTrustLog = {
    _count: TrustLogCountAggregateOutputType | null
    _avg: TrustLogAvgAggregateOutputType | null
    _sum: TrustLogSumAggregateOutputType | null
    _min: TrustLogMinAggregateOutputType | null
    _max: TrustLogMaxAggregateOutputType | null
  }

  export type TrustLogAvgAggregateOutputType = {
    id: number | null
    scoreChange: number | null
  }

  export type TrustLogSumAggregateOutputType = {
    id: number | null
    scoreChange: number | null
  }

  export type TrustLogMinAggregateOutputType = {
    id: number | null
    userId: string | null
    scoreChange: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type TrustLogMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    scoreChange: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type TrustLogCountAggregateOutputType = {
    id: number
    userId: number
    scoreChange: number
    reason: number
    createdAt: number
    _all: number
  }


  export type TrustLogAvgAggregateInputType = {
    id?: true
    scoreChange?: true
  }

  export type TrustLogSumAggregateInputType = {
    id?: true
    scoreChange?: true
  }

  export type TrustLogMinAggregateInputType = {
    id?: true
    userId?: true
    scoreChange?: true
    reason?: true
    createdAt?: true
  }

  export type TrustLogMaxAggregateInputType = {
    id?: true
    userId?: true
    scoreChange?: true
    reason?: true
    createdAt?: true
  }

  export type TrustLogCountAggregateInputType = {
    id?: true
    userId?: true
    scoreChange?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type TrustLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrustLog to aggregate.
     */
    where?: TrustLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrustLogs to fetch.
     */
    orderBy?: TrustLogOrderByWithRelationInput | TrustLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrustLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrustLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrustLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrustLogs
    **/
    _count?: true | TrustLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrustLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrustLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrustLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrustLogMaxAggregateInputType
  }

  export type GetTrustLogAggregateType<T extends TrustLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTrustLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrustLog[P]>
      : GetScalarType<T[P], AggregateTrustLog[P]>
  }




  export type TrustLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrustLogWhereInput
    orderBy?: TrustLogOrderByWithAggregationInput | TrustLogOrderByWithAggregationInput[]
    by: TrustLogScalarFieldEnum[] | TrustLogScalarFieldEnum
    having?: TrustLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrustLogCountAggregateInputType | true
    _avg?: TrustLogAvgAggregateInputType
    _sum?: TrustLogSumAggregateInputType
    _min?: TrustLogMinAggregateInputType
    _max?: TrustLogMaxAggregateInputType
  }

  export type TrustLogGroupByOutputType = {
    id: number
    userId: string
    scoreChange: number
    reason: string
    createdAt: Date
    _count: TrustLogCountAggregateOutputType | null
    _avg: TrustLogAvgAggregateOutputType | null
    _sum: TrustLogSumAggregateOutputType | null
    _min: TrustLogMinAggregateOutputType | null
    _max: TrustLogMaxAggregateOutputType | null
  }

  type GetTrustLogGroupByPayload<T extends TrustLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrustLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrustLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrustLogGroupByOutputType[P]>
            : GetScalarType<T[P], TrustLogGroupByOutputType[P]>
        }
      >
    >


  export type TrustLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scoreChange?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trustLog"]>

  export type TrustLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scoreChange?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trustLog"]>

  export type TrustLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scoreChange?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trustLog"]>

  export type TrustLogSelectScalar = {
    id?: boolean
    userId?: boolean
    scoreChange?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type TrustLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "scoreChange" | "reason" | "createdAt", ExtArgs["result"]["trustLog"]>
  export type TrustLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TrustLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TrustLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TrustLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrustLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      scoreChange: number
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["trustLog"]>
    composites: {}
  }

  type TrustLogGetPayload<S extends boolean | null | undefined | TrustLogDefaultArgs> = $Result.GetResult<Prisma.$TrustLogPayload, S>

  type TrustLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrustLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrustLogCountAggregateInputType | true
    }

  export interface TrustLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrustLog'], meta: { name: 'TrustLog' } }
    /**
     * Find zero or one TrustLog that matches the filter.
     * @param {TrustLogFindUniqueArgs} args - Arguments to find a TrustLog
     * @example
     * // Get one TrustLog
     * const trustLog = await prisma.trustLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrustLogFindUniqueArgs>(args: SelectSubset<T, TrustLogFindUniqueArgs<ExtArgs>>): Prisma__TrustLogClient<$Result.GetResult<Prisma.$TrustLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrustLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrustLogFindUniqueOrThrowArgs} args - Arguments to find a TrustLog
     * @example
     * // Get one TrustLog
     * const trustLog = await prisma.trustLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrustLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TrustLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrustLogClient<$Result.GetResult<Prisma.$TrustLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrustLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrustLogFindFirstArgs} args - Arguments to find a TrustLog
     * @example
     * // Get one TrustLog
     * const trustLog = await prisma.trustLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrustLogFindFirstArgs>(args?: SelectSubset<T, TrustLogFindFirstArgs<ExtArgs>>): Prisma__TrustLogClient<$Result.GetResult<Prisma.$TrustLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrustLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrustLogFindFirstOrThrowArgs} args - Arguments to find a TrustLog
     * @example
     * // Get one TrustLog
     * const trustLog = await prisma.trustLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrustLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TrustLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrustLogClient<$Result.GetResult<Prisma.$TrustLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrustLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrustLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrustLogs
     * const trustLogs = await prisma.trustLog.findMany()
     * 
     * // Get first 10 TrustLogs
     * const trustLogs = await prisma.trustLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trustLogWithIdOnly = await prisma.trustLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrustLogFindManyArgs>(args?: SelectSubset<T, TrustLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrustLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrustLog.
     * @param {TrustLogCreateArgs} args - Arguments to create a TrustLog.
     * @example
     * // Create one TrustLog
     * const TrustLog = await prisma.trustLog.create({
     *   data: {
     *     // ... data to create a TrustLog
     *   }
     * })
     * 
     */
    create<T extends TrustLogCreateArgs>(args: SelectSubset<T, TrustLogCreateArgs<ExtArgs>>): Prisma__TrustLogClient<$Result.GetResult<Prisma.$TrustLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrustLogs.
     * @param {TrustLogCreateManyArgs} args - Arguments to create many TrustLogs.
     * @example
     * // Create many TrustLogs
     * const trustLog = await prisma.trustLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrustLogCreateManyArgs>(args?: SelectSubset<T, TrustLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrustLogs and returns the data saved in the database.
     * @param {TrustLogCreateManyAndReturnArgs} args - Arguments to create many TrustLogs.
     * @example
     * // Create many TrustLogs
     * const trustLog = await prisma.trustLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrustLogs and only return the `id`
     * const trustLogWithIdOnly = await prisma.trustLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrustLogCreateManyAndReturnArgs>(args?: SelectSubset<T, TrustLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrustLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrustLog.
     * @param {TrustLogDeleteArgs} args - Arguments to delete one TrustLog.
     * @example
     * // Delete one TrustLog
     * const TrustLog = await prisma.trustLog.delete({
     *   where: {
     *     // ... filter to delete one TrustLog
     *   }
     * })
     * 
     */
    delete<T extends TrustLogDeleteArgs>(args: SelectSubset<T, TrustLogDeleteArgs<ExtArgs>>): Prisma__TrustLogClient<$Result.GetResult<Prisma.$TrustLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrustLog.
     * @param {TrustLogUpdateArgs} args - Arguments to update one TrustLog.
     * @example
     * // Update one TrustLog
     * const trustLog = await prisma.trustLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrustLogUpdateArgs>(args: SelectSubset<T, TrustLogUpdateArgs<ExtArgs>>): Prisma__TrustLogClient<$Result.GetResult<Prisma.$TrustLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrustLogs.
     * @param {TrustLogDeleteManyArgs} args - Arguments to filter TrustLogs to delete.
     * @example
     * // Delete a few TrustLogs
     * const { count } = await prisma.trustLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrustLogDeleteManyArgs>(args?: SelectSubset<T, TrustLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrustLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrustLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrustLogs
     * const trustLog = await prisma.trustLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrustLogUpdateManyArgs>(args: SelectSubset<T, TrustLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrustLogs and returns the data updated in the database.
     * @param {TrustLogUpdateManyAndReturnArgs} args - Arguments to update many TrustLogs.
     * @example
     * // Update many TrustLogs
     * const trustLog = await prisma.trustLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrustLogs and only return the `id`
     * const trustLogWithIdOnly = await prisma.trustLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrustLogUpdateManyAndReturnArgs>(args: SelectSubset<T, TrustLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrustLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrustLog.
     * @param {TrustLogUpsertArgs} args - Arguments to update or create a TrustLog.
     * @example
     * // Update or create a TrustLog
     * const trustLog = await prisma.trustLog.upsert({
     *   create: {
     *     // ... data to create a TrustLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrustLog we want to update
     *   }
     * })
     */
    upsert<T extends TrustLogUpsertArgs>(args: SelectSubset<T, TrustLogUpsertArgs<ExtArgs>>): Prisma__TrustLogClient<$Result.GetResult<Prisma.$TrustLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrustLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrustLogCountArgs} args - Arguments to filter TrustLogs to count.
     * @example
     * // Count the number of TrustLogs
     * const count = await prisma.trustLog.count({
     *   where: {
     *     // ... the filter for the TrustLogs we want to count
     *   }
     * })
    **/
    count<T extends TrustLogCountArgs>(
      args?: Subset<T, TrustLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrustLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrustLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrustLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrustLogAggregateArgs>(args: Subset<T, TrustLogAggregateArgs>): Prisma.PrismaPromise<GetTrustLogAggregateType<T>>

    /**
     * Group by TrustLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrustLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrustLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrustLogGroupByArgs['orderBy'] }
        : { orderBy?: TrustLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrustLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrustLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrustLog model
   */
  readonly fields: TrustLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrustLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrustLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrustLog model
   */
  interface TrustLogFieldRefs {
    readonly id: FieldRef<"TrustLog", 'Int'>
    readonly userId: FieldRef<"TrustLog", 'String'>
    readonly scoreChange: FieldRef<"TrustLog", 'Float'>
    readonly reason: FieldRef<"TrustLog", 'String'>
    readonly createdAt: FieldRef<"TrustLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrustLog findUnique
   */
  export type TrustLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrustLog
     */
    select?: TrustLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrustLog
     */
    omit?: TrustLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrustLogInclude<ExtArgs> | null
    /**
     * Filter, which TrustLog to fetch.
     */
    where: TrustLogWhereUniqueInput
  }

  /**
   * TrustLog findUniqueOrThrow
   */
  export type TrustLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrustLog
     */
    select?: TrustLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrustLog
     */
    omit?: TrustLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrustLogInclude<ExtArgs> | null
    /**
     * Filter, which TrustLog to fetch.
     */
    where: TrustLogWhereUniqueInput
  }

  /**
   * TrustLog findFirst
   */
  export type TrustLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrustLog
     */
    select?: TrustLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrustLog
     */
    omit?: TrustLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrustLogInclude<ExtArgs> | null
    /**
     * Filter, which TrustLog to fetch.
     */
    where?: TrustLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrustLogs to fetch.
     */
    orderBy?: TrustLogOrderByWithRelationInput | TrustLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrustLogs.
     */
    cursor?: TrustLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrustLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrustLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrustLogs.
     */
    distinct?: TrustLogScalarFieldEnum | TrustLogScalarFieldEnum[]
  }

  /**
   * TrustLog findFirstOrThrow
   */
  export type TrustLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrustLog
     */
    select?: TrustLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrustLog
     */
    omit?: TrustLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrustLogInclude<ExtArgs> | null
    /**
     * Filter, which TrustLog to fetch.
     */
    where?: TrustLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrustLogs to fetch.
     */
    orderBy?: TrustLogOrderByWithRelationInput | TrustLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrustLogs.
     */
    cursor?: TrustLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrustLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrustLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrustLogs.
     */
    distinct?: TrustLogScalarFieldEnum | TrustLogScalarFieldEnum[]
  }

  /**
   * TrustLog findMany
   */
  export type TrustLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrustLog
     */
    select?: TrustLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrustLog
     */
    omit?: TrustLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrustLogInclude<ExtArgs> | null
    /**
     * Filter, which TrustLogs to fetch.
     */
    where?: TrustLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrustLogs to fetch.
     */
    orderBy?: TrustLogOrderByWithRelationInput | TrustLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrustLogs.
     */
    cursor?: TrustLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrustLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrustLogs.
     */
    skip?: number
    distinct?: TrustLogScalarFieldEnum | TrustLogScalarFieldEnum[]
  }

  /**
   * TrustLog create
   */
  export type TrustLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrustLog
     */
    select?: TrustLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrustLog
     */
    omit?: TrustLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrustLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TrustLog.
     */
    data: XOR<TrustLogCreateInput, TrustLogUncheckedCreateInput>
  }

  /**
   * TrustLog createMany
   */
  export type TrustLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrustLogs.
     */
    data: TrustLogCreateManyInput | TrustLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrustLog createManyAndReturn
   */
  export type TrustLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrustLog
     */
    select?: TrustLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrustLog
     */
    omit?: TrustLogOmit<ExtArgs> | null
    /**
     * The data used to create many TrustLogs.
     */
    data: TrustLogCreateManyInput | TrustLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrustLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrustLog update
   */
  export type TrustLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrustLog
     */
    select?: TrustLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrustLog
     */
    omit?: TrustLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrustLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TrustLog.
     */
    data: XOR<TrustLogUpdateInput, TrustLogUncheckedUpdateInput>
    /**
     * Choose, which TrustLog to update.
     */
    where: TrustLogWhereUniqueInput
  }

  /**
   * TrustLog updateMany
   */
  export type TrustLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrustLogs.
     */
    data: XOR<TrustLogUpdateManyMutationInput, TrustLogUncheckedUpdateManyInput>
    /**
     * Filter which TrustLogs to update
     */
    where?: TrustLogWhereInput
    /**
     * Limit how many TrustLogs to update.
     */
    limit?: number
  }

  /**
   * TrustLog updateManyAndReturn
   */
  export type TrustLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrustLog
     */
    select?: TrustLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrustLog
     */
    omit?: TrustLogOmit<ExtArgs> | null
    /**
     * The data used to update TrustLogs.
     */
    data: XOR<TrustLogUpdateManyMutationInput, TrustLogUncheckedUpdateManyInput>
    /**
     * Filter which TrustLogs to update
     */
    where?: TrustLogWhereInput
    /**
     * Limit how many TrustLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrustLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrustLog upsert
   */
  export type TrustLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrustLog
     */
    select?: TrustLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrustLog
     */
    omit?: TrustLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrustLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TrustLog to update in case it exists.
     */
    where: TrustLogWhereUniqueInput
    /**
     * In case the TrustLog found by the `where` argument doesn't exist, create a new TrustLog with this data.
     */
    create: XOR<TrustLogCreateInput, TrustLogUncheckedCreateInput>
    /**
     * In case the TrustLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrustLogUpdateInput, TrustLogUncheckedUpdateInput>
  }

  /**
   * TrustLog delete
   */
  export type TrustLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrustLog
     */
    select?: TrustLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrustLog
     */
    omit?: TrustLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrustLogInclude<ExtArgs> | null
    /**
     * Filter which TrustLog to delete.
     */
    where: TrustLogWhereUniqueInput
  }

  /**
   * TrustLog deleteMany
   */
  export type TrustLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrustLogs to delete
     */
    where?: TrustLogWhereInput
    /**
     * Limit how many TrustLogs to delete.
     */
    limit?: number
  }

  /**
   * TrustLog without action
   */
  export type TrustLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrustLog
     */
    select?: TrustLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrustLog
     */
    omit?: TrustLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrustLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    uid: 'uid',
    name: 'name',
    profilePicture: 'profilePicture',
    latitude: 'latitude',
    longitude: 'longitude',
    trustScore: 'trustScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    status: 'status',
    latitude: 'latitude',
    longitude: 'longitude',
    ownerId: 'ownerId',
    communityId: 'communityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const UserCommunityScalarFieldEnum: {
    userId: 'userId',
    communityId: 'communityId',
    role: 'role'
  };

  export type UserCommunityScalarFieldEnum = (typeof UserCommunityScalarFieldEnum)[keyof typeof UserCommunityScalarFieldEnum]


  export const BorrowScalarFieldEnum: {
    id: 'id',
    borrowerId: 'borrowerId',
    ownerId: 'ownerId',
    itemId: 'itemId',
    status: 'status',
    requestedAt: 'requestedAt',
    approvedAt: 'approvedAt',
    borrowedAt: 'borrowedAt',
    returnedAt: 'returnedAt'
  };

  export type BorrowScalarFieldEnum = (typeof BorrowScalarFieldEnum)[keyof typeof BorrowScalarFieldEnum]


  export const TrustLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    scoreChange: 'scoreChange',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type TrustLogScalarFieldEnum = (typeof TrustLogScalarFieldEnum)[keyof typeof TrustLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ItemStatus'
   */
  export type EnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus'>
    


  /**
   * Reference to a field of type 'ItemStatus[]'
   */
  export type ListEnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'BorrowStatus'
   */
  export type EnumBorrowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BorrowStatus'>
    


  /**
   * Reference to a field of type 'BorrowStatus[]'
   */
  export type ListEnumBorrowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BorrowStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    uid?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    trustScore?: FloatFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    items?: ItemListRelationFilter
    borrowings?: BorrowListRelationFilter
    lendings?: BorrowListRelationFilter
    userCommunities?: UserCommunityListRelationFilter
    trustLogs?: TrustLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    uid?: SortOrder
    name?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    trustScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: ItemOrderByRelationAggregateInput
    borrowings?: BorrowOrderByRelationAggregateInput
    lendings?: BorrowOrderByRelationAggregateInput
    userCommunities?: UserCommunityOrderByRelationAggregateInput
    trustLogs?: TrustLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    trustScore?: FloatFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    items?: ItemListRelationFilter
    borrowings?: BorrowListRelationFilter
    lendings?: BorrowListRelationFilter
    userCommunities?: UserCommunityListRelationFilter
    trustLogs?: TrustLogListRelationFilter
  }, "uid">

  export type UserOrderByWithAggregationInput = {
    uid?: SortOrder
    name?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    trustScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    trustScore?: FloatWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    imageUrl?: StringNullableListFilter<"Item">
    status?: EnumItemStatusFilter<"Item"> | $Enums.ItemStatus
    latitude?: FloatFilter<"Item"> | number
    longitude?: FloatFilter<"Item"> | number
    ownerId?: StringFilter<"Item"> | string
    communityId?: IntNullableFilter<"Item"> | number | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    community?: XOR<CommunityNullableScalarRelationFilter, CommunityWhereInput> | null
    borrowRecords?: BorrowListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerId?: SortOrder
    communityId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    community?: CommunityOrderByWithRelationInput
    borrowRecords?: BorrowOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    imageUrl?: StringNullableListFilter<"Item">
    status?: EnumItemStatusFilter<"Item"> | $Enums.ItemStatus
    latitude?: FloatFilter<"Item"> | number
    longitude?: FloatFilter<"Item"> | number
    ownerId?: StringFilter<"Item"> | string
    communityId?: IntNullableFilter<"Item"> | number | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    community?: XOR<CommunityNullableScalarRelationFilter, CommunityWhereInput> | null
    borrowRecords?: BorrowListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerId?: SortOrder
    communityId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    name?: StringWithAggregatesFilter<"Item"> | string
    description?: StringNullableWithAggregatesFilter<"Item"> | string | null
    imageUrl?: StringNullableListFilter<"Item">
    status?: EnumItemStatusWithAggregatesFilter<"Item"> | $Enums.ItemStatus
    latitude?: FloatWithAggregatesFilter<"Item"> | number
    longitude?: FloatWithAggregatesFilter<"Item"> | number
    ownerId?: StringWithAggregatesFilter<"Item"> | string
    communityId?: IntNullableWithAggregatesFilter<"Item"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: IntFilter<"Community"> | number
    name?: StringFilter<"Community"> | string
    latitude?: FloatFilter<"Community"> | number
    longitude?: FloatFilter<"Community"> | number
    createdAt?: DateTimeFilter<"Community"> | Date | string
    items?: ItemListRelationFilter
    members?: UserCommunityListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    items?: ItemOrderByRelationAggregateInput
    members?: UserCommunityOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    latitude?: FloatFilter<"Community"> | number
    longitude?: FloatFilter<"Community"> | number
    createdAt?: DateTimeFilter<"Community"> | Date | string
    items?: ItemListRelationFilter
    members?: UserCommunityListRelationFilter
  }, "id" | "name">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _avg?: CommunityAvgOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
    _sum?: CommunitySumOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Community"> | number
    name?: StringWithAggregatesFilter<"Community"> | string
    latitude?: FloatWithAggregatesFilter<"Community"> | number
    longitude?: FloatWithAggregatesFilter<"Community"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
  }

  export type UserCommunityWhereInput = {
    AND?: UserCommunityWhereInput | UserCommunityWhereInput[]
    OR?: UserCommunityWhereInput[]
    NOT?: UserCommunityWhereInput | UserCommunityWhereInput[]
    userId?: StringFilter<"UserCommunity"> | string
    communityId?: IntFilter<"UserCommunity"> | number
    role?: EnumUserRoleFilter<"UserCommunity"> | $Enums.UserRole
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
  }

  export type UserCommunityOrderByWithRelationInput = {
    userId?: SortOrder
    communityId?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    community?: CommunityOrderByWithRelationInput
  }

  export type UserCommunityWhereUniqueInput = Prisma.AtLeast<{
    userId_communityId?: UserCommunityUserIdCommunityIdCompoundUniqueInput
    AND?: UserCommunityWhereInput | UserCommunityWhereInput[]
    OR?: UserCommunityWhereInput[]
    NOT?: UserCommunityWhereInput | UserCommunityWhereInput[]
    userId?: StringFilter<"UserCommunity"> | string
    communityId?: IntFilter<"UserCommunity"> | number
    role?: EnumUserRoleFilter<"UserCommunity"> | $Enums.UserRole
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
  }, "userId_communityId">

  export type UserCommunityOrderByWithAggregationInput = {
    userId?: SortOrder
    communityId?: SortOrder
    role?: SortOrder
    _count?: UserCommunityCountOrderByAggregateInput
    _avg?: UserCommunityAvgOrderByAggregateInput
    _max?: UserCommunityMaxOrderByAggregateInput
    _min?: UserCommunityMinOrderByAggregateInput
    _sum?: UserCommunitySumOrderByAggregateInput
  }

  export type UserCommunityScalarWhereWithAggregatesInput = {
    AND?: UserCommunityScalarWhereWithAggregatesInput | UserCommunityScalarWhereWithAggregatesInput[]
    OR?: UserCommunityScalarWhereWithAggregatesInput[]
    NOT?: UserCommunityScalarWhereWithAggregatesInput | UserCommunityScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserCommunity"> | string
    communityId?: IntWithAggregatesFilter<"UserCommunity"> | number
    role?: EnumUserRoleWithAggregatesFilter<"UserCommunity"> | $Enums.UserRole
  }

  export type BorrowWhereInput = {
    AND?: BorrowWhereInput | BorrowWhereInput[]
    OR?: BorrowWhereInput[]
    NOT?: BorrowWhereInput | BorrowWhereInput[]
    id?: IntFilter<"Borrow"> | number
    borrowerId?: StringFilter<"Borrow"> | string
    ownerId?: StringFilter<"Borrow"> | string
    itemId?: IntFilter<"Borrow"> | number
    status?: EnumBorrowStatusFilter<"Borrow"> | $Enums.BorrowStatus
    requestedAt?: DateTimeFilter<"Borrow"> | Date | string
    approvedAt?: DateTimeNullableFilter<"Borrow"> | Date | string | null
    borrowedAt?: DateTimeNullableFilter<"Borrow"> | Date | string | null
    returnedAt?: DateTimeNullableFilter<"Borrow"> | Date | string | null
    borrower?: XOR<UserScalarRelationFilter, UserWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type BorrowOrderByWithRelationInput = {
    id?: SortOrder
    borrowerId?: SortOrder
    ownerId?: SortOrder
    itemId?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    borrowedAt?: SortOrderInput | SortOrder
    returnedAt?: SortOrderInput | SortOrder
    borrower?: UserOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type BorrowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BorrowWhereInput | BorrowWhereInput[]
    OR?: BorrowWhereInput[]
    NOT?: BorrowWhereInput | BorrowWhereInput[]
    borrowerId?: StringFilter<"Borrow"> | string
    ownerId?: StringFilter<"Borrow"> | string
    itemId?: IntFilter<"Borrow"> | number
    status?: EnumBorrowStatusFilter<"Borrow"> | $Enums.BorrowStatus
    requestedAt?: DateTimeFilter<"Borrow"> | Date | string
    approvedAt?: DateTimeNullableFilter<"Borrow"> | Date | string | null
    borrowedAt?: DateTimeNullableFilter<"Borrow"> | Date | string | null
    returnedAt?: DateTimeNullableFilter<"Borrow"> | Date | string | null
    borrower?: XOR<UserScalarRelationFilter, UserWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type BorrowOrderByWithAggregationInput = {
    id?: SortOrder
    borrowerId?: SortOrder
    ownerId?: SortOrder
    itemId?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    borrowedAt?: SortOrderInput | SortOrder
    returnedAt?: SortOrderInput | SortOrder
    _count?: BorrowCountOrderByAggregateInput
    _avg?: BorrowAvgOrderByAggregateInput
    _max?: BorrowMaxOrderByAggregateInput
    _min?: BorrowMinOrderByAggregateInput
    _sum?: BorrowSumOrderByAggregateInput
  }

  export type BorrowScalarWhereWithAggregatesInput = {
    AND?: BorrowScalarWhereWithAggregatesInput | BorrowScalarWhereWithAggregatesInput[]
    OR?: BorrowScalarWhereWithAggregatesInput[]
    NOT?: BorrowScalarWhereWithAggregatesInput | BorrowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Borrow"> | number
    borrowerId?: StringWithAggregatesFilter<"Borrow"> | string
    ownerId?: StringWithAggregatesFilter<"Borrow"> | string
    itemId?: IntWithAggregatesFilter<"Borrow"> | number
    status?: EnumBorrowStatusWithAggregatesFilter<"Borrow"> | $Enums.BorrowStatus
    requestedAt?: DateTimeWithAggregatesFilter<"Borrow"> | Date | string
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Borrow"> | Date | string | null
    borrowedAt?: DateTimeNullableWithAggregatesFilter<"Borrow"> | Date | string | null
    returnedAt?: DateTimeNullableWithAggregatesFilter<"Borrow"> | Date | string | null
  }

  export type TrustLogWhereInput = {
    AND?: TrustLogWhereInput | TrustLogWhereInput[]
    OR?: TrustLogWhereInput[]
    NOT?: TrustLogWhereInput | TrustLogWhereInput[]
    id?: IntFilter<"TrustLog"> | number
    userId?: StringFilter<"TrustLog"> | string
    scoreChange?: FloatFilter<"TrustLog"> | number
    reason?: StringFilter<"TrustLog"> | string
    createdAt?: DateTimeFilter<"TrustLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TrustLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    scoreChange?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TrustLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrustLogWhereInput | TrustLogWhereInput[]
    OR?: TrustLogWhereInput[]
    NOT?: TrustLogWhereInput | TrustLogWhereInput[]
    userId?: StringFilter<"TrustLog"> | string
    scoreChange?: FloatFilter<"TrustLog"> | number
    reason?: StringFilter<"TrustLog"> | string
    createdAt?: DateTimeFilter<"TrustLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TrustLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    scoreChange?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: TrustLogCountOrderByAggregateInput
    _avg?: TrustLogAvgOrderByAggregateInput
    _max?: TrustLogMaxOrderByAggregateInput
    _min?: TrustLogMinOrderByAggregateInput
    _sum?: TrustLogSumOrderByAggregateInput
  }

  export type TrustLogScalarWhereWithAggregatesInput = {
    AND?: TrustLogScalarWhereWithAggregatesInput | TrustLogScalarWhereWithAggregatesInput[]
    OR?: TrustLogScalarWhereWithAggregatesInput[]
    NOT?: TrustLogScalarWhereWithAggregatesInput | TrustLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrustLog"> | number
    userId?: StringWithAggregatesFilter<"TrustLog"> | string
    scoreChange?: FloatWithAggregatesFilter<"TrustLog"> | number
    reason?: StringWithAggregatesFilter<"TrustLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TrustLog"> | Date | string
  }

  export type UserCreateInput = {
    uid: string
    name?: string | null
    profilePicture?: string | null
    latitude?: number | null
    longitude?: number | null
    trustScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCreateNestedManyWithoutOwnerInput
    borrowings?: BorrowCreateNestedManyWithoutBorrowerInput
    lendings?: BorrowCreateNestedManyWithoutOwnerInput
    userCommunities?: UserCommunityCreateNestedManyWithoutUserInput
    trustLogs?: TrustLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    uid: string
    name?: string | null
    profilePicture?: string | null
    latitude?: number | null
    longitude?: number | null
    trustScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutOwnerInput
    borrowings?: BorrowUncheckedCreateNestedManyWithoutBorrowerInput
    lendings?: BorrowUncheckedCreateNestedManyWithoutOwnerInput
    userCommunities?: UserCommunityUncheckedCreateNestedManyWithoutUserInput
    trustLogs?: TrustLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutOwnerNestedInput
    borrowings?: BorrowUpdateManyWithoutBorrowerNestedInput
    lendings?: BorrowUpdateManyWithoutOwnerNestedInput
    userCommunities?: UserCommunityUpdateManyWithoutUserNestedInput
    trustLogs?: TrustLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutOwnerNestedInput
    borrowings?: BorrowUncheckedUpdateManyWithoutBorrowerNestedInput
    lendings?: BorrowUncheckedUpdateManyWithoutOwnerNestedInput
    userCommunities?: UserCommunityUncheckedUpdateManyWithoutUserNestedInput
    trustLogs?: TrustLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    uid: string
    name?: string | null
    profilePicture?: string | null
    latitude?: number | null
    longitude?: number | null
    trustScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    name: string
    description?: string | null
    imageUrl?: ItemCreateimageUrlInput | string[]
    status?: $Enums.ItemStatus
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutItemsInput
    community?: CommunityCreateNestedOneWithoutItemsInput
    borrowRecords?: BorrowCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    imageUrl?: ItemCreateimageUrlInput | string[]
    status?: $Enums.ItemStatus
    latitude: number
    longitude: number
    ownerId: string
    communityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    borrowRecords?: BorrowUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: ItemUpdateimageUrlInput | string[]
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutItemsNestedInput
    community?: CommunityUpdateOneWithoutItemsNestedInput
    borrowRecords?: BorrowUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: ItemUpdateimageUrlInput | string[]
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowRecords?: BorrowUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    imageUrl?: ItemCreateimageUrlInput | string[]
    status?: $Enums.ItemStatus
    latitude: number
    longitude: number
    ownerId: string
    communityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: ItemUpdateimageUrlInput | string[]
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: ItemUpdateimageUrlInput | string[]
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityCreateInput = {
    name: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    items?: ItemCreateNestedManyWithoutCommunityInput
    members?: UserCommunityCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutCommunityInput
    members?: UserCommunityUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutCommunityNestedInput
    members?: UserCommunityUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutCommunityNestedInput
    members?: UserCommunityUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateManyInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    createdAt?: Date | string
  }

  export type CommunityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCommunityCreateInput = {
    role?: $Enums.UserRole
    user: UserCreateNestedOneWithoutUserCommunitiesInput
    community: CommunityCreateNestedOneWithoutMembersInput
  }

  export type UserCommunityUncheckedCreateInput = {
    userId: string
    communityId: number
    role?: $Enums.UserRole
  }

  export type UserCommunityUpdateInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    user?: UserUpdateOneRequiredWithoutUserCommunitiesNestedInput
    community?: CommunityUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UserCommunityUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    communityId?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserCommunityCreateManyInput = {
    userId: string
    communityId: number
    role?: $Enums.UserRole
  }

  export type UserCommunityUpdateManyMutationInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserCommunityUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    communityId?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type BorrowCreateInput = {
    status?: $Enums.BorrowStatus
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    borrowedAt?: Date | string | null
    returnedAt?: Date | string | null
    borrower: UserCreateNestedOneWithoutBorrowingsInput
    owner: UserCreateNestedOneWithoutLendingsInput
    item: ItemCreateNestedOneWithoutBorrowRecordsInput
  }

  export type BorrowUncheckedCreateInput = {
    id?: number
    borrowerId: string
    ownerId: string
    itemId: number
    status?: $Enums.BorrowStatus
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    borrowedAt?: Date | string | null
    returnedAt?: Date | string | null
  }

  export type BorrowUpdateInput = {
    status?: EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrower?: UserUpdateOneRequiredWithoutBorrowingsNestedInput
    owner?: UserUpdateOneRequiredWithoutLendingsNestedInput
    item?: ItemUpdateOneRequiredWithoutBorrowRecordsNestedInput
  }

  export type BorrowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    borrowerId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    status?: EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowCreateManyInput = {
    id?: number
    borrowerId: string
    ownerId: string
    itemId: number
    status?: $Enums.BorrowStatus
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    borrowedAt?: Date | string | null
    returnedAt?: Date | string | null
  }

  export type BorrowUpdateManyMutationInput = {
    status?: EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    borrowerId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    status?: EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrustLogCreateInput = {
    scoreChange: number
    reason: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTrustLogsInput
  }

  export type TrustLogUncheckedCreateInput = {
    id?: number
    userId: string
    scoreChange: number
    reason: string
    createdAt?: Date | string
  }

  export type TrustLogUpdateInput = {
    scoreChange?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTrustLogsNestedInput
  }

  export type TrustLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    scoreChange?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrustLogCreateManyInput = {
    id?: number
    userId: string
    scoreChange: number
    reason: string
    createdAt?: Date | string
  }

  export type TrustLogUpdateManyMutationInput = {
    scoreChange?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrustLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    scoreChange?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type BorrowListRelationFilter = {
    every?: BorrowWhereInput
    some?: BorrowWhereInput
    none?: BorrowWhereInput
  }

  export type UserCommunityListRelationFilter = {
    every?: UserCommunityWhereInput
    some?: UserCommunityWhereInput
    none?: UserCommunityWhereInput
  }

  export type TrustLogListRelationFilter = {
    every?: TrustLogWhereInput
    some?: TrustLogWhereInput
    none?: TrustLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BorrowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCommunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrustLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    uid?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    trustScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    trustScore?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    uid?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    trustScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    uid?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    trustScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    trustScore?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommunityNullableScalarRelationFilter = {
    is?: CommunityWhereInput | null
    isNot?: CommunityWhereInput | null
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerId?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    communityId?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerId?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerId?: SortOrder
    communityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    communityId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunitySumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type CommunityScalarRelationFilter = {
    is?: CommunityWhereInput
    isNot?: CommunityWhereInput
  }

  export type UserCommunityUserIdCommunityIdCompoundUniqueInput = {
    userId: string
    communityId: number
  }

  export type UserCommunityCountOrderByAggregateInput = {
    userId?: SortOrder
    communityId?: SortOrder
    role?: SortOrder
  }

  export type UserCommunityAvgOrderByAggregateInput = {
    communityId?: SortOrder
  }

  export type UserCommunityMaxOrderByAggregateInput = {
    userId?: SortOrder
    communityId?: SortOrder
    role?: SortOrder
  }

  export type UserCommunityMinOrderByAggregateInput = {
    userId?: SortOrder
    communityId?: SortOrder
    role?: SortOrder
  }

  export type UserCommunitySumOrderByAggregateInput = {
    communityId?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumBorrowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BorrowStatus | EnumBorrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BorrowStatus[] | ListEnumBorrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BorrowStatus[] | ListEnumBorrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBorrowStatusFilter<$PrismaModel> | $Enums.BorrowStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type BorrowCountOrderByAggregateInput = {
    id?: SortOrder
    borrowerId?: SortOrder
    ownerId?: SortOrder
    itemId?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    approvedAt?: SortOrder
    borrowedAt?: SortOrder
    returnedAt?: SortOrder
  }

  export type BorrowAvgOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
  }

  export type BorrowMaxOrderByAggregateInput = {
    id?: SortOrder
    borrowerId?: SortOrder
    ownerId?: SortOrder
    itemId?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    approvedAt?: SortOrder
    borrowedAt?: SortOrder
    returnedAt?: SortOrder
  }

  export type BorrowMinOrderByAggregateInput = {
    id?: SortOrder
    borrowerId?: SortOrder
    ownerId?: SortOrder
    itemId?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    approvedAt?: SortOrder
    borrowedAt?: SortOrder
    returnedAt?: SortOrder
  }

  export type BorrowSumOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
  }

  export type EnumBorrowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BorrowStatus | EnumBorrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BorrowStatus[] | ListEnumBorrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BorrowStatus[] | ListEnumBorrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBorrowStatusWithAggregatesFilter<$PrismaModel> | $Enums.BorrowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBorrowStatusFilter<$PrismaModel>
    _max?: NestedEnumBorrowStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TrustLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scoreChange?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type TrustLogAvgOrderByAggregateInput = {
    id?: SortOrder
    scoreChange?: SortOrder
  }

  export type TrustLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scoreChange?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type TrustLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scoreChange?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type TrustLogSumOrderByAggregateInput = {
    id?: SortOrder
    scoreChange?: SortOrder
  }

  export type ItemCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput> | ItemCreateWithoutOwnerInput[] | ItemUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutOwnerInput | ItemCreateOrConnectWithoutOwnerInput[]
    createMany?: ItemCreateManyOwnerInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type BorrowCreateNestedManyWithoutBorrowerInput = {
    create?: XOR<BorrowCreateWithoutBorrowerInput, BorrowUncheckedCreateWithoutBorrowerInput> | BorrowCreateWithoutBorrowerInput[] | BorrowUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: BorrowCreateOrConnectWithoutBorrowerInput | BorrowCreateOrConnectWithoutBorrowerInput[]
    createMany?: BorrowCreateManyBorrowerInputEnvelope
    connect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
  }

  export type BorrowCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BorrowCreateWithoutOwnerInput, BorrowUncheckedCreateWithoutOwnerInput> | BorrowCreateWithoutOwnerInput[] | BorrowUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BorrowCreateOrConnectWithoutOwnerInput | BorrowCreateOrConnectWithoutOwnerInput[]
    createMany?: BorrowCreateManyOwnerInputEnvelope
    connect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
  }

  export type UserCommunityCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCommunityCreateWithoutUserInput, UserCommunityUncheckedCreateWithoutUserInput> | UserCommunityCreateWithoutUserInput[] | UserCommunityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCommunityCreateOrConnectWithoutUserInput | UserCommunityCreateOrConnectWithoutUserInput[]
    createMany?: UserCommunityCreateManyUserInputEnvelope
    connect?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
  }

  export type TrustLogCreateNestedManyWithoutUserInput = {
    create?: XOR<TrustLogCreateWithoutUserInput, TrustLogUncheckedCreateWithoutUserInput> | TrustLogCreateWithoutUserInput[] | TrustLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrustLogCreateOrConnectWithoutUserInput | TrustLogCreateOrConnectWithoutUserInput[]
    createMany?: TrustLogCreateManyUserInputEnvelope
    connect?: TrustLogWhereUniqueInput | TrustLogWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput> | ItemCreateWithoutOwnerInput[] | ItemUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutOwnerInput | ItemCreateOrConnectWithoutOwnerInput[]
    createMany?: ItemCreateManyOwnerInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type BorrowUncheckedCreateNestedManyWithoutBorrowerInput = {
    create?: XOR<BorrowCreateWithoutBorrowerInput, BorrowUncheckedCreateWithoutBorrowerInput> | BorrowCreateWithoutBorrowerInput[] | BorrowUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: BorrowCreateOrConnectWithoutBorrowerInput | BorrowCreateOrConnectWithoutBorrowerInput[]
    createMany?: BorrowCreateManyBorrowerInputEnvelope
    connect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
  }

  export type BorrowUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BorrowCreateWithoutOwnerInput, BorrowUncheckedCreateWithoutOwnerInput> | BorrowCreateWithoutOwnerInput[] | BorrowUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BorrowCreateOrConnectWithoutOwnerInput | BorrowCreateOrConnectWithoutOwnerInput[]
    createMany?: BorrowCreateManyOwnerInputEnvelope
    connect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
  }

  export type UserCommunityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCommunityCreateWithoutUserInput, UserCommunityUncheckedCreateWithoutUserInput> | UserCommunityCreateWithoutUserInput[] | UserCommunityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCommunityCreateOrConnectWithoutUserInput | UserCommunityCreateOrConnectWithoutUserInput[]
    createMany?: UserCommunityCreateManyUserInputEnvelope
    connect?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
  }

  export type TrustLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TrustLogCreateWithoutUserInput, TrustLogUncheckedCreateWithoutUserInput> | TrustLogCreateWithoutUserInput[] | TrustLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrustLogCreateOrConnectWithoutUserInput | TrustLogCreateOrConnectWithoutUserInput[]
    createMany?: TrustLogCreateManyUserInputEnvelope
    connect?: TrustLogWhereUniqueInput | TrustLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ItemUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput> | ItemCreateWithoutOwnerInput[] | ItemUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutOwnerInput | ItemCreateOrConnectWithoutOwnerInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutOwnerInput | ItemUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ItemCreateManyOwnerInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutOwnerInput | ItemUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutOwnerInput | ItemUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type BorrowUpdateManyWithoutBorrowerNestedInput = {
    create?: XOR<BorrowCreateWithoutBorrowerInput, BorrowUncheckedCreateWithoutBorrowerInput> | BorrowCreateWithoutBorrowerInput[] | BorrowUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: BorrowCreateOrConnectWithoutBorrowerInput | BorrowCreateOrConnectWithoutBorrowerInput[]
    upsert?: BorrowUpsertWithWhereUniqueWithoutBorrowerInput | BorrowUpsertWithWhereUniqueWithoutBorrowerInput[]
    createMany?: BorrowCreateManyBorrowerInputEnvelope
    set?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    disconnect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    delete?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    connect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    update?: BorrowUpdateWithWhereUniqueWithoutBorrowerInput | BorrowUpdateWithWhereUniqueWithoutBorrowerInput[]
    updateMany?: BorrowUpdateManyWithWhereWithoutBorrowerInput | BorrowUpdateManyWithWhereWithoutBorrowerInput[]
    deleteMany?: BorrowScalarWhereInput | BorrowScalarWhereInput[]
  }

  export type BorrowUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BorrowCreateWithoutOwnerInput, BorrowUncheckedCreateWithoutOwnerInput> | BorrowCreateWithoutOwnerInput[] | BorrowUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BorrowCreateOrConnectWithoutOwnerInput | BorrowCreateOrConnectWithoutOwnerInput[]
    upsert?: BorrowUpsertWithWhereUniqueWithoutOwnerInput | BorrowUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BorrowCreateManyOwnerInputEnvelope
    set?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    disconnect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    delete?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    connect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    update?: BorrowUpdateWithWhereUniqueWithoutOwnerInput | BorrowUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BorrowUpdateManyWithWhereWithoutOwnerInput | BorrowUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BorrowScalarWhereInput | BorrowScalarWhereInput[]
  }

  export type UserCommunityUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCommunityCreateWithoutUserInput, UserCommunityUncheckedCreateWithoutUserInput> | UserCommunityCreateWithoutUserInput[] | UserCommunityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCommunityCreateOrConnectWithoutUserInput | UserCommunityCreateOrConnectWithoutUserInput[]
    upsert?: UserCommunityUpsertWithWhereUniqueWithoutUserInput | UserCommunityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCommunityCreateManyUserInputEnvelope
    set?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    disconnect?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    delete?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    connect?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    update?: UserCommunityUpdateWithWhereUniqueWithoutUserInput | UserCommunityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCommunityUpdateManyWithWhereWithoutUserInput | UserCommunityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCommunityScalarWhereInput | UserCommunityScalarWhereInput[]
  }

  export type TrustLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrustLogCreateWithoutUserInput, TrustLogUncheckedCreateWithoutUserInput> | TrustLogCreateWithoutUserInput[] | TrustLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrustLogCreateOrConnectWithoutUserInput | TrustLogCreateOrConnectWithoutUserInput[]
    upsert?: TrustLogUpsertWithWhereUniqueWithoutUserInput | TrustLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrustLogCreateManyUserInputEnvelope
    set?: TrustLogWhereUniqueInput | TrustLogWhereUniqueInput[]
    disconnect?: TrustLogWhereUniqueInput | TrustLogWhereUniqueInput[]
    delete?: TrustLogWhereUniqueInput | TrustLogWhereUniqueInput[]
    connect?: TrustLogWhereUniqueInput | TrustLogWhereUniqueInput[]
    update?: TrustLogUpdateWithWhereUniqueWithoutUserInput | TrustLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrustLogUpdateManyWithWhereWithoutUserInput | TrustLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrustLogScalarWhereInput | TrustLogScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput> | ItemCreateWithoutOwnerInput[] | ItemUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutOwnerInput | ItemCreateOrConnectWithoutOwnerInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutOwnerInput | ItemUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ItemCreateManyOwnerInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutOwnerInput | ItemUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutOwnerInput | ItemUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type BorrowUncheckedUpdateManyWithoutBorrowerNestedInput = {
    create?: XOR<BorrowCreateWithoutBorrowerInput, BorrowUncheckedCreateWithoutBorrowerInput> | BorrowCreateWithoutBorrowerInput[] | BorrowUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: BorrowCreateOrConnectWithoutBorrowerInput | BorrowCreateOrConnectWithoutBorrowerInput[]
    upsert?: BorrowUpsertWithWhereUniqueWithoutBorrowerInput | BorrowUpsertWithWhereUniqueWithoutBorrowerInput[]
    createMany?: BorrowCreateManyBorrowerInputEnvelope
    set?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    disconnect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    delete?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    connect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    update?: BorrowUpdateWithWhereUniqueWithoutBorrowerInput | BorrowUpdateWithWhereUniqueWithoutBorrowerInput[]
    updateMany?: BorrowUpdateManyWithWhereWithoutBorrowerInput | BorrowUpdateManyWithWhereWithoutBorrowerInput[]
    deleteMany?: BorrowScalarWhereInput | BorrowScalarWhereInput[]
  }

  export type BorrowUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BorrowCreateWithoutOwnerInput, BorrowUncheckedCreateWithoutOwnerInput> | BorrowCreateWithoutOwnerInput[] | BorrowUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BorrowCreateOrConnectWithoutOwnerInput | BorrowCreateOrConnectWithoutOwnerInput[]
    upsert?: BorrowUpsertWithWhereUniqueWithoutOwnerInput | BorrowUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BorrowCreateManyOwnerInputEnvelope
    set?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    disconnect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    delete?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    connect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    update?: BorrowUpdateWithWhereUniqueWithoutOwnerInput | BorrowUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BorrowUpdateManyWithWhereWithoutOwnerInput | BorrowUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BorrowScalarWhereInput | BorrowScalarWhereInput[]
  }

  export type UserCommunityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCommunityCreateWithoutUserInput, UserCommunityUncheckedCreateWithoutUserInput> | UserCommunityCreateWithoutUserInput[] | UserCommunityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCommunityCreateOrConnectWithoutUserInput | UserCommunityCreateOrConnectWithoutUserInput[]
    upsert?: UserCommunityUpsertWithWhereUniqueWithoutUserInput | UserCommunityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCommunityCreateManyUserInputEnvelope
    set?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    disconnect?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    delete?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    connect?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    update?: UserCommunityUpdateWithWhereUniqueWithoutUserInput | UserCommunityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCommunityUpdateManyWithWhereWithoutUserInput | UserCommunityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCommunityScalarWhereInput | UserCommunityScalarWhereInput[]
  }

  export type TrustLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrustLogCreateWithoutUserInput, TrustLogUncheckedCreateWithoutUserInput> | TrustLogCreateWithoutUserInput[] | TrustLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrustLogCreateOrConnectWithoutUserInput | TrustLogCreateOrConnectWithoutUserInput[]
    upsert?: TrustLogUpsertWithWhereUniqueWithoutUserInput | TrustLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrustLogCreateManyUserInputEnvelope
    set?: TrustLogWhereUniqueInput | TrustLogWhereUniqueInput[]
    disconnect?: TrustLogWhereUniqueInput | TrustLogWhereUniqueInput[]
    delete?: TrustLogWhereUniqueInput | TrustLogWhereUniqueInput[]
    connect?: TrustLogWhereUniqueInput | TrustLogWhereUniqueInput[]
    update?: TrustLogUpdateWithWhereUniqueWithoutUserInput | TrustLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrustLogUpdateManyWithWhereWithoutUserInput | TrustLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrustLogScalarWhereInput | TrustLogScalarWhereInput[]
  }

  export type ItemCreateimageUrlInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutItemsInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityCreateNestedOneWithoutItemsInput = {
    create?: XOR<CommunityCreateWithoutItemsInput, CommunityUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutItemsInput
    connect?: CommunityWhereUniqueInput
  }

  export type BorrowCreateNestedManyWithoutItemInput = {
    create?: XOR<BorrowCreateWithoutItemInput, BorrowUncheckedCreateWithoutItemInput> | BorrowCreateWithoutItemInput[] | BorrowUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BorrowCreateOrConnectWithoutItemInput | BorrowCreateOrConnectWithoutItemInput[]
    createMany?: BorrowCreateManyItemInputEnvelope
    connect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
  }

  export type BorrowUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<BorrowCreateWithoutItemInput, BorrowUncheckedCreateWithoutItemInput> | BorrowCreateWithoutItemInput[] | BorrowUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BorrowCreateOrConnectWithoutItemInput | BorrowCreateOrConnectWithoutItemInput[]
    createMany?: BorrowCreateManyItemInputEnvelope
    connect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
  }

  export type ItemUpdateimageUrlInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ItemStatus
  }

  export type UserUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    upsert?: UserUpsertWithoutItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutItemsInput, UserUpdateWithoutItemsInput>, UserUncheckedUpdateWithoutItemsInput>
  }

  export type CommunityUpdateOneWithoutItemsNestedInput = {
    create?: XOR<CommunityCreateWithoutItemsInput, CommunityUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutItemsInput
    upsert?: CommunityUpsertWithoutItemsInput
    disconnect?: CommunityWhereInput | boolean
    delete?: CommunityWhereInput | boolean
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutItemsInput, CommunityUpdateWithoutItemsInput>, CommunityUncheckedUpdateWithoutItemsInput>
  }

  export type BorrowUpdateManyWithoutItemNestedInput = {
    create?: XOR<BorrowCreateWithoutItemInput, BorrowUncheckedCreateWithoutItemInput> | BorrowCreateWithoutItemInput[] | BorrowUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BorrowCreateOrConnectWithoutItemInput | BorrowCreateOrConnectWithoutItemInput[]
    upsert?: BorrowUpsertWithWhereUniqueWithoutItemInput | BorrowUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: BorrowCreateManyItemInputEnvelope
    set?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    disconnect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    delete?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    connect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    update?: BorrowUpdateWithWhereUniqueWithoutItemInput | BorrowUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: BorrowUpdateManyWithWhereWithoutItemInput | BorrowUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: BorrowScalarWhereInput | BorrowScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BorrowUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<BorrowCreateWithoutItemInput, BorrowUncheckedCreateWithoutItemInput> | BorrowCreateWithoutItemInput[] | BorrowUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BorrowCreateOrConnectWithoutItemInput | BorrowCreateOrConnectWithoutItemInput[]
    upsert?: BorrowUpsertWithWhereUniqueWithoutItemInput | BorrowUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: BorrowCreateManyItemInputEnvelope
    set?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    disconnect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    delete?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    connect?: BorrowWhereUniqueInput | BorrowWhereUniqueInput[]
    update?: BorrowUpdateWithWhereUniqueWithoutItemInput | BorrowUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: BorrowUpdateManyWithWhereWithoutItemInput | BorrowUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: BorrowScalarWhereInput | BorrowScalarWhereInput[]
  }

  export type ItemCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ItemCreateWithoutCommunityInput, ItemUncheckedCreateWithoutCommunityInput> | ItemCreateWithoutCommunityInput[] | ItemUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCommunityInput | ItemCreateOrConnectWithoutCommunityInput[]
    createMany?: ItemCreateManyCommunityInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type UserCommunityCreateNestedManyWithoutCommunityInput = {
    create?: XOR<UserCommunityCreateWithoutCommunityInput, UserCommunityUncheckedCreateWithoutCommunityInput> | UserCommunityCreateWithoutCommunityInput[] | UserCommunityUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: UserCommunityCreateOrConnectWithoutCommunityInput | UserCommunityCreateOrConnectWithoutCommunityInput[]
    createMany?: UserCommunityCreateManyCommunityInputEnvelope
    connect?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ItemCreateWithoutCommunityInput, ItemUncheckedCreateWithoutCommunityInput> | ItemCreateWithoutCommunityInput[] | ItemUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCommunityInput | ItemCreateOrConnectWithoutCommunityInput[]
    createMany?: ItemCreateManyCommunityInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type UserCommunityUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<UserCommunityCreateWithoutCommunityInput, UserCommunityUncheckedCreateWithoutCommunityInput> | UserCommunityCreateWithoutCommunityInput[] | UserCommunityUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: UserCommunityCreateOrConnectWithoutCommunityInput | UserCommunityCreateOrConnectWithoutCommunityInput[]
    createMany?: UserCommunityCreateManyCommunityInputEnvelope
    connect?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
  }

  export type ItemUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ItemCreateWithoutCommunityInput, ItemUncheckedCreateWithoutCommunityInput> | ItemCreateWithoutCommunityInput[] | ItemUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCommunityInput | ItemCreateOrConnectWithoutCommunityInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCommunityInput | ItemUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ItemCreateManyCommunityInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCommunityInput | ItemUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCommunityInput | ItemUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type UserCommunityUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<UserCommunityCreateWithoutCommunityInput, UserCommunityUncheckedCreateWithoutCommunityInput> | UserCommunityCreateWithoutCommunityInput[] | UserCommunityUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: UserCommunityCreateOrConnectWithoutCommunityInput | UserCommunityCreateOrConnectWithoutCommunityInput[]
    upsert?: UserCommunityUpsertWithWhereUniqueWithoutCommunityInput | UserCommunityUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: UserCommunityCreateManyCommunityInputEnvelope
    set?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    disconnect?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    delete?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    connect?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    update?: UserCommunityUpdateWithWhereUniqueWithoutCommunityInput | UserCommunityUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: UserCommunityUpdateManyWithWhereWithoutCommunityInput | UserCommunityUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: UserCommunityScalarWhereInput | UserCommunityScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ItemCreateWithoutCommunityInput, ItemUncheckedCreateWithoutCommunityInput> | ItemCreateWithoutCommunityInput[] | ItemUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCommunityInput | ItemCreateOrConnectWithoutCommunityInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCommunityInput | ItemUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ItemCreateManyCommunityInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCommunityInput | ItemUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCommunityInput | ItemUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type UserCommunityUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<UserCommunityCreateWithoutCommunityInput, UserCommunityUncheckedCreateWithoutCommunityInput> | UserCommunityCreateWithoutCommunityInput[] | UserCommunityUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: UserCommunityCreateOrConnectWithoutCommunityInput | UserCommunityCreateOrConnectWithoutCommunityInput[]
    upsert?: UserCommunityUpsertWithWhereUniqueWithoutCommunityInput | UserCommunityUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: UserCommunityCreateManyCommunityInputEnvelope
    set?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    disconnect?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    delete?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    connect?: UserCommunityWhereUniqueInput | UserCommunityWhereUniqueInput[]
    update?: UserCommunityUpdateWithWhereUniqueWithoutCommunityInput | UserCommunityUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: UserCommunityUpdateManyWithWhereWithoutCommunityInput | UserCommunityUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: UserCommunityScalarWhereInput | UserCommunityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserCommunitiesInput = {
    create?: XOR<UserCreateWithoutUserCommunitiesInput, UserUncheckedCreateWithoutUserCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCommunitiesInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityCreateNestedOneWithoutMembersInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput
    connect?: CommunityWhereUniqueInput
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type UserUpdateOneRequiredWithoutUserCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutUserCommunitiesInput, UserUncheckedCreateWithoutUserCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCommunitiesInput
    upsert?: UserUpsertWithoutUserCommunitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserCommunitiesInput, UserUpdateWithoutUserCommunitiesInput>, UserUncheckedUpdateWithoutUserCommunitiesInput>
  }

  export type CommunityUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput
    upsert?: CommunityUpsertWithoutMembersInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutMembersInput, CommunityUpdateWithoutMembersInput>, CommunityUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutBorrowingsInput = {
    create?: XOR<UserCreateWithoutBorrowingsInput, UserUncheckedCreateWithoutBorrowingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBorrowingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLendingsInput = {
    create?: XOR<UserCreateWithoutLendingsInput, UserUncheckedCreateWithoutLendingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLendingsInput
    connect?: UserWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutBorrowRecordsInput = {
    create?: XOR<ItemCreateWithoutBorrowRecordsInput, ItemUncheckedCreateWithoutBorrowRecordsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutBorrowRecordsInput
    connect?: ItemWhereUniqueInput
  }

  export type EnumBorrowStatusFieldUpdateOperationsInput = {
    set?: $Enums.BorrowStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutBorrowingsNestedInput = {
    create?: XOR<UserCreateWithoutBorrowingsInput, UserUncheckedCreateWithoutBorrowingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBorrowingsInput
    upsert?: UserUpsertWithoutBorrowingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBorrowingsInput, UserUpdateWithoutBorrowingsInput>, UserUncheckedUpdateWithoutBorrowingsInput>
  }

  export type UserUpdateOneRequiredWithoutLendingsNestedInput = {
    create?: XOR<UserCreateWithoutLendingsInput, UserUncheckedCreateWithoutLendingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLendingsInput
    upsert?: UserUpsertWithoutLendingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLendingsInput, UserUpdateWithoutLendingsInput>, UserUncheckedUpdateWithoutLendingsInput>
  }

  export type ItemUpdateOneRequiredWithoutBorrowRecordsNestedInput = {
    create?: XOR<ItemCreateWithoutBorrowRecordsInput, ItemUncheckedCreateWithoutBorrowRecordsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutBorrowRecordsInput
    upsert?: ItemUpsertWithoutBorrowRecordsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutBorrowRecordsInput, ItemUpdateWithoutBorrowRecordsInput>, ItemUncheckedUpdateWithoutBorrowRecordsInput>
  }

  export type UserCreateNestedOneWithoutTrustLogsInput = {
    create?: XOR<UserCreateWithoutTrustLogsInput, UserUncheckedCreateWithoutTrustLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrustLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTrustLogsNestedInput = {
    create?: XOR<UserCreateWithoutTrustLogsInput, UserUncheckedCreateWithoutTrustLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrustLogsInput
    upsert?: UserUpsertWithoutTrustLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTrustLogsInput, UserUpdateWithoutTrustLogsInput>, UserUncheckedUpdateWithoutTrustLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumBorrowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BorrowStatus | EnumBorrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BorrowStatus[] | ListEnumBorrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BorrowStatus[] | ListEnumBorrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBorrowStatusFilter<$PrismaModel> | $Enums.BorrowStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumBorrowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BorrowStatus | EnumBorrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BorrowStatus[] | ListEnumBorrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BorrowStatus[] | ListEnumBorrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBorrowStatusWithAggregatesFilter<$PrismaModel> | $Enums.BorrowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBorrowStatusFilter<$PrismaModel>
    _max?: NestedEnumBorrowStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ItemCreateWithoutOwnerInput = {
    name: string
    description?: string | null
    imageUrl?: ItemCreateimageUrlInput | string[]
    status?: $Enums.ItemStatus
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    community?: CommunityCreateNestedOneWithoutItemsInput
    borrowRecords?: BorrowCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    description?: string | null
    imageUrl?: ItemCreateimageUrlInput | string[]
    status?: $Enums.ItemStatus
    latitude: number
    longitude: number
    communityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    borrowRecords?: BorrowUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutOwnerInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput>
  }

  export type ItemCreateManyOwnerInputEnvelope = {
    data: ItemCreateManyOwnerInput | ItemCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BorrowCreateWithoutBorrowerInput = {
    status?: $Enums.BorrowStatus
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    borrowedAt?: Date | string | null
    returnedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutLendingsInput
    item: ItemCreateNestedOneWithoutBorrowRecordsInput
  }

  export type BorrowUncheckedCreateWithoutBorrowerInput = {
    id?: number
    ownerId: string
    itemId: number
    status?: $Enums.BorrowStatus
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    borrowedAt?: Date | string | null
    returnedAt?: Date | string | null
  }

  export type BorrowCreateOrConnectWithoutBorrowerInput = {
    where: BorrowWhereUniqueInput
    create: XOR<BorrowCreateWithoutBorrowerInput, BorrowUncheckedCreateWithoutBorrowerInput>
  }

  export type BorrowCreateManyBorrowerInputEnvelope = {
    data: BorrowCreateManyBorrowerInput | BorrowCreateManyBorrowerInput[]
    skipDuplicates?: boolean
  }

  export type BorrowCreateWithoutOwnerInput = {
    status?: $Enums.BorrowStatus
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    borrowedAt?: Date | string | null
    returnedAt?: Date | string | null
    borrower: UserCreateNestedOneWithoutBorrowingsInput
    item: ItemCreateNestedOneWithoutBorrowRecordsInput
  }

  export type BorrowUncheckedCreateWithoutOwnerInput = {
    id?: number
    borrowerId: string
    itemId: number
    status?: $Enums.BorrowStatus
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    borrowedAt?: Date | string | null
    returnedAt?: Date | string | null
  }

  export type BorrowCreateOrConnectWithoutOwnerInput = {
    where: BorrowWhereUniqueInput
    create: XOR<BorrowCreateWithoutOwnerInput, BorrowUncheckedCreateWithoutOwnerInput>
  }

  export type BorrowCreateManyOwnerInputEnvelope = {
    data: BorrowCreateManyOwnerInput | BorrowCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UserCommunityCreateWithoutUserInput = {
    role?: $Enums.UserRole
    community: CommunityCreateNestedOneWithoutMembersInput
  }

  export type UserCommunityUncheckedCreateWithoutUserInput = {
    communityId: number
    role?: $Enums.UserRole
  }

  export type UserCommunityCreateOrConnectWithoutUserInput = {
    where: UserCommunityWhereUniqueInput
    create: XOR<UserCommunityCreateWithoutUserInput, UserCommunityUncheckedCreateWithoutUserInput>
  }

  export type UserCommunityCreateManyUserInputEnvelope = {
    data: UserCommunityCreateManyUserInput | UserCommunityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TrustLogCreateWithoutUserInput = {
    scoreChange: number
    reason: string
    createdAt?: Date | string
  }

  export type TrustLogUncheckedCreateWithoutUserInput = {
    id?: number
    scoreChange: number
    reason: string
    createdAt?: Date | string
  }

  export type TrustLogCreateOrConnectWithoutUserInput = {
    where: TrustLogWhereUniqueInput
    create: XOR<TrustLogCreateWithoutUserInput, TrustLogUncheckedCreateWithoutUserInput>
  }

  export type TrustLogCreateManyUserInputEnvelope = {
    data: TrustLogCreateManyUserInput | TrustLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutOwnerInput, ItemUncheckedUpdateWithoutOwnerInput>
    create: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutOwnerInput, ItemUncheckedUpdateWithoutOwnerInput>
  }

  export type ItemUpdateManyWithWhereWithoutOwnerInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    imageUrl?: StringNullableListFilter<"Item">
    status?: EnumItemStatusFilter<"Item"> | $Enums.ItemStatus
    latitude?: FloatFilter<"Item"> | number
    longitude?: FloatFilter<"Item"> | number
    ownerId?: StringFilter<"Item"> | string
    communityId?: IntNullableFilter<"Item"> | number | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
  }

  export type BorrowUpsertWithWhereUniqueWithoutBorrowerInput = {
    where: BorrowWhereUniqueInput
    update: XOR<BorrowUpdateWithoutBorrowerInput, BorrowUncheckedUpdateWithoutBorrowerInput>
    create: XOR<BorrowCreateWithoutBorrowerInput, BorrowUncheckedCreateWithoutBorrowerInput>
  }

  export type BorrowUpdateWithWhereUniqueWithoutBorrowerInput = {
    where: BorrowWhereUniqueInput
    data: XOR<BorrowUpdateWithoutBorrowerInput, BorrowUncheckedUpdateWithoutBorrowerInput>
  }

  export type BorrowUpdateManyWithWhereWithoutBorrowerInput = {
    where: BorrowScalarWhereInput
    data: XOR<BorrowUpdateManyMutationInput, BorrowUncheckedUpdateManyWithoutBorrowerInput>
  }

  export type BorrowScalarWhereInput = {
    AND?: BorrowScalarWhereInput | BorrowScalarWhereInput[]
    OR?: BorrowScalarWhereInput[]
    NOT?: BorrowScalarWhereInput | BorrowScalarWhereInput[]
    id?: IntFilter<"Borrow"> | number
    borrowerId?: StringFilter<"Borrow"> | string
    ownerId?: StringFilter<"Borrow"> | string
    itemId?: IntFilter<"Borrow"> | number
    status?: EnumBorrowStatusFilter<"Borrow"> | $Enums.BorrowStatus
    requestedAt?: DateTimeFilter<"Borrow"> | Date | string
    approvedAt?: DateTimeNullableFilter<"Borrow"> | Date | string | null
    borrowedAt?: DateTimeNullableFilter<"Borrow"> | Date | string | null
    returnedAt?: DateTimeNullableFilter<"Borrow"> | Date | string | null
  }

  export type BorrowUpsertWithWhereUniqueWithoutOwnerInput = {
    where: BorrowWhereUniqueInput
    update: XOR<BorrowUpdateWithoutOwnerInput, BorrowUncheckedUpdateWithoutOwnerInput>
    create: XOR<BorrowCreateWithoutOwnerInput, BorrowUncheckedCreateWithoutOwnerInput>
  }

  export type BorrowUpdateWithWhereUniqueWithoutOwnerInput = {
    where: BorrowWhereUniqueInput
    data: XOR<BorrowUpdateWithoutOwnerInput, BorrowUncheckedUpdateWithoutOwnerInput>
  }

  export type BorrowUpdateManyWithWhereWithoutOwnerInput = {
    where: BorrowScalarWhereInput
    data: XOR<BorrowUpdateManyMutationInput, BorrowUncheckedUpdateManyWithoutOwnerInput>
  }

  export type UserCommunityUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCommunityWhereUniqueInput
    update: XOR<UserCommunityUpdateWithoutUserInput, UserCommunityUncheckedUpdateWithoutUserInput>
    create: XOR<UserCommunityCreateWithoutUserInput, UserCommunityUncheckedCreateWithoutUserInput>
  }

  export type UserCommunityUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCommunityWhereUniqueInput
    data: XOR<UserCommunityUpdateWithoutUserInput, UserCommunityUncheckedUpdateWithoutUserInput>
  }

  export type UserCommunityUpdateManyWithWhereWithoutUserInput = {
    where: UserCommunityScalarWhereInput
    data: XOR<UserCommunityUpdateManyMutationInput, UserCommunityUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCommunityScalarWhereInput = {
    AND?: UserCommunityScalarWhereInput | UserCommunityScalarWhereInput[]
    OR?: UserCommunityScalarWhereInput[]
    NOT?: UserCommunityScalarWhereInput | UserCommunityScalarWhereInput[]
    userId?: StringFilter<"UserCommunity"> | string
    communityId?: IntFilter<"UserCommunity"> | number
    role?: EnumUserRoleFilter<"UserCommunity"> | $Enums.UserRole
  }

  export type TrustLogUpsertWithWhereUniqueWithoutUserInput = {
    where: TrustLogWhereUniqueInput
    update: XOR<TrustLogUpdateWithoutUserInput, TrustLogUncheckedUpdateWithoutUserInput>
    create: XOR<TrustLogCreateWithoutUserInput, TrustLogUncheckedCreateWithoutUserInput>
  }

  export type TrustLogUpdateWithWhereUniqueWithoutUserInput = {
    where: TrustLogWhereUniqueInput
    data: XOR<TrustLogUpdateWithoutUserInput, TrustLogUncheckedUpdateWithoutUserInput>
  }

  export type TrustLogUpdateManyWithWhereWithoutUserInput = {
    where: TrustLogScalarWhereInput
    data: XOR<TrustLogUpdateManyMutationInput, TrustLogUncheckedUpdateManyWithoutUserInput>
  }

  export type TrustLogScalarWhereInput = {
    AND?: TrustLogScalarWhereInput | TrustLogScalarWhereInput[]
    OR?: TrustLogScalarWhereInput[]
    NOT?: TrustLogScalarWhereInput | TrustLogScalarWhereInput[]
    id?: IntFilter<"TrustLog"> | number
    userId?: StringFilter<"TrustLog"> | string
    scoreChange?: FloatFilter<"TrustLog"> | number
    reason?: StringFilter<"TrustLog"> | string
    createdAt?: DateTimeFilter<"TrustLog"> | Date | string
  }

  export type UserCreateWithoutItemsInput = {
    uid: string
    name?: string | null
    profilePicture?: string | null
    latitude?: number | null
    longitude?: number | null
    trustScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    borrowings?: BorrowCreateNestedManyWithoutBorrowerInput
    lendings?: BorrowCreateNestedManyWithoutOwnerInput
    userCommunities?: UserCommunityCreateNestedManyWithoutUserInput
    trustLogs?: TrustLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutItemsInput = {
    uid: string
    name?: string | null
    profilePicture?: string | null
    latitude?: number | null
    longitude?: number | null
    trustScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    borrowings?: BorrowUncheckedCreateNestedManyWithoutBorrowerInput
    lendings?: BorrowUncheckedCreateNestedManyWithoutOwnerInput
    userCommunities?: UserCommunityUncheckedCreateNestedManyWithoutUserInput
    trustLogs?: TrustLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
  }

  export type CommunityCreateWithoutItemsInput = {
    name: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    members?: UserCommunityCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutItemsInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    members?: UserCommunityUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutItemsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutItemsInput, CommunityUncheckedCreateWithoutItemsInput>
  }

  export type BorrowCreateWithoutItemInput = {
    status?: $Enums.BorrowStatus
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    borrowedAt?: Date | string | null
    returnedAt?: Date | string | null
    borrower: UserCreateNestedOneWithoutBorrowingsInput
    owner: UserCreateNestedOneWithoutLendingsInput
  }

  export type BorrowUncheckedCreateWithoutItemInput = {
    id?: number
    borrowerId: string
    ownerId: string
    status?: $Enums.BorrowStatus
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    borrowedAt?: Date | string | null
    returnedAt?: Date | string | null
  }

  export type BorrowCreateOrConnectWithoutItemInput = {
    where: BorrowWhereUniqueInput
    create: XOR<BorrowCreateWithoutItemInput, BorrowUncheckedCreateWithoutItemInput>
  }

  export type BorrowCreateManyItemInputEnvelope = {
    data: BorrowCreateManyItemInput | BorrowCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutItemsInput = {
    update: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
  }

  export type UserUpdateWithoutItemsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowings?: BorrowUpdateManyWithoutBorrowerNestedInput
    lendings?: BorrowUpdateManyWithoutOwnerNestedInput
    userCommunities?: UserCommunityUpdateManyWithoutUserNestedInput
    trustLogs?: TrustLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutItemsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowings?: BorrowUncheckedUpdateManyWithoutBorrowerNestedInput
    lendings?: BorrowUncheckedUpdateManyWithoutOwnerNestedInput
    userCommunities?: UserCommunityUncheckedUpdateManyWithoutUserNestedInput
    trustLogs?: TrustLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommunityUpsertWithoutItemsInput = {
    update: XOR<CommunityUpdateWithoutItemsInput, CommunityUncheckedUpdateWithoutItemsInput>
    create: XOR<CommunityCreateWithoutItemsInput, CommunityUncheckedCreateWithoutItemsInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutItemsInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutItemsInput, CommunityUncheckedUpdateWithoutItemsInput>
  }

  export type CommunityUpdateWithoutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserCommunityUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserCommunityUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type BorrowUpsertWithWhereUniqueWithoutItemInput = {
    where: BorrowWhereUniqueInput
    update: XOR<BorrowUpdateWithoutItemInput, BorrowUncheckedUpdateWithoutItemInput>
    create: XOR<BorrowCreateWithoutItemInput, BorrowUncheckedCreateWithoutItemInput>
  }

  export type BorrowUpdateWithWhereUniqueWithoutItemInput = {
    where: BorrowWhereUniqueInput
    data: XOR<BorrowUpdateWithoutItemInput, BorrowUncheckedUpdateWithoutItemInput>
  }

  export type BorrowUpdateManyWithWhereWithoutItemInput = {
    where: BorrowScalarWhereInput
    data: XOR<BorrowUpdateManyMutationInput, BorrowUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemCreateWithoutCommunityInput = {
    name: string
    description?: string | null
    imageUrl?: ItemCreateimageUrlInput | string[]
    status?: $Enums.ItemStatus
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutItemsInput
    borrowRecords?: BorrowCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutCommunityInput = {
    id?: number
    name: string
    description?: string | null
    imageUrl?: ItemCreateimageUrlInput | string[]
    status?: $Enums.ItemStatus
    latitude: number
    longitude: number
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    borrowRecords?: BorrowUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutCommunityInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutCommunityInput, ItemUncheckedCreateWithoutCommunityInput>
  }

  export type ItemCreateManyCommunityInputEnvelope = {
    data: ItemCreateManyCommunityInput | ItemCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type UserCommunityCreateWithoutCommunityInput = {
    role?: $Enums.UserRole
    user: UserCreateNestedOneWithoutUserCommunitiesInput
  }

  export type UserCommunityUncheckedCreateWithoutCommunityInput = {
    userId: string
    role?: $Enums.UserRole
  }

  export type UserCommunityCreateOrConnectWithoutCommunityInput = {
    where: UserCommunityWhereUniqueInput
    create: XOR<UserCommunityCreateWithoutCommunityInput, UserCommunityUncheckedCreateWithoutCommunityInput>
  }

  export type UserCommunityCreateManyCommunityInputEnvelope = {
    data: UserCommunityCreateManyCommunityInput | UserCommunityCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithWhereUniqueWithoutCommunityInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutCommunityInput, ItemUncheckedUpdateWithoutCommunityInput>
    create: XOR<ItemCreateWithoutCommunityInput, ItemUncheckedCreateWithoutCommunityInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutCommunityInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutCommunityInput, ItemUncheckedUpdateWithoutCommunityInput>
  }

  export type ItemUpdateManyWithWhereWithoutCommunityInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutCommunityInput>
  }

  export type UserCommunityUpsertWithWhereUniqueWithoutCommunityInput = {
    where: UserCommunityWhereUniqueInput
    update: XOR<UserCommunityUpdateWithoutCommunityInput, UserCommunityUncheckedUpdateWithoutCommunityInput>
    create: XOR<UserCommunityCreateWithoutCommunityInput, UserCommunityUncheckedCreateWithoutCommunityInput>
  }

  export type UserCommunityUpdateWithWhereUniqueWithoutCommunityInput = {
    where: UserCommunityWhereUniqueInput
    data: XOR<UserCommunityUpdateWithoutCommunityInput, UserCommunityUncheckedUpdateWithoutCommunityInput>
  }

  export type UserCommunityUpdateManyWithWhereWithoutCommunityInput = {
    where: UserCommunityScalarWhereInput
    data: XOR<UserCommunityUpdateManyMutationInput, UserCommunityUncheckedUpdateManyWithoutCommunityInput>
  }

  export type UserCreateWithoutUserCommunitiesInput = {
    uid: string
    name?: string | null
    profilePicture?: string | null
    latitude?: number | null
    longitude?: number | null
    trustScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCreateNestedManyWithoutOwnerInput
    borrowings?: BorrowCreateNestedManyWithoutBorrowerInput
    lendings?: BorrowCreateNestedManyWithoutOwnerInput
    trustLogs?: TrustLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserCommunitiesInput = {
    uid: string
    name?: string | null
    profilePicture?: string | null
    latitude?: number | null
    longitude?: number | null
    trustScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutOwnerInput
    borrowings?: BorrowUncheckedCreateNestedManyWithoutBorrowerInput
    lendings?: BorrowUncheckedCreateNestedManyWithoutOwnerInput
    trustLogs?: TrustLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserCommunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCommunitiesInput, UserUncheckedCreateWithoutUserCommunitiesInput>
  }

  export type CommunityCreateWithoutMembersInput = {
    name: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    items?: ItemCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutMembersInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutUserCommunitiesInput = {
    update: XOR<UserUpdateWithoutUserCommunitiesInput, UserUncheckedUpdateWithoutUserCommunitiesInput>
    create: XOR<UserCreateWithoutUserCommunitiesInput, UserUncheckedCreateWithoutUserCommunitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserCommunitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserCommunitiesInput, UserUncheckedUpdateWithoutUserCommunitiesInput>
  }

  export type UserUpdateWithoutUserCommunitiesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutOwnerNestedInput
    borrowings?: BorrowUpdateManyWithoutBorrowerNestedInput
    lendings?: BorrowUpdateManyWithoutOwnerNestedInput
    trustLogs?: TrustLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCommunitiesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutOwnerNestedInput
    borrowings?: BorrowUncheckedUpdateManyWithoutBorrowerNestedInput
    lendings?: BorrowUncheckedUpdateManyWithoutOwnerNestedInput
    trustLogs?: TrustLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommunityUpsertWithoutMembersInput = {
    update: XOR<CommunityUpdateWithoutMembersInput, CommunityUncheckedUpdateWithoutMembersInput>
    create: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutMembersInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutMembersInput, CommunityUncheckedUpdateWithoutMembersInput>
  }

  export type CommunityUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type UserCreateWithoutBorrowingsInput = {
    uid: string
    name?: string | null
    profilePicture?: string | null
    latitude?: number | null
    longitude?: number | null
    trustScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCreateNestedManyWithoutOwnerInput
    lendings?: BorrowCreateNestedManyWithoutOwnerInput
    userCommunities?: UserCommunityCreateNestedManyWithoutUserInput
    trustLogs?: TrustLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBorrowingsInput = {
    uid: string
    name?: string | null
    profilePicture?: string | null
    latitude?: number | null
    longitude?: number | null
    trustScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutOwnerInput
    lendings?: BorrowUncheckedCreateNestedManyWithoutOwnerInput
    userCommunities?: UserCommunityUncheckedCreateNestedManyWithoutUserInput
    trustLogs?: TrustLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBorrowingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBorrowingsInput, UserUncheckedCreateWithoutBorrowingsInput>
  }

  export type UserCreateWithoutLendingsInput = {
    uid: string
    name?: string | null
    profilePicture?: string | null
    latitude?: number | null
    longitude?: number | null
    trustScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCreateNestedManyWithoutOwnerInput
    borrowings?: BorrowCreateNestedManyWithoutBorrowerInput
    userCommunities?: UserCommunityCreateNestedManyWithoutUserInput
    trustLogs?: TrustLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLendingsInput = {
    uid: string
    name?: string | null
    profilePicture?: string | null
    latitude?: number | null
    longitude?: number | null
    trustScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutOwnerInput
    borrowings?: BorrowUncheckedCreateNestedManyWithoutBorrowerInput
    userCommunities?: UserCommunityUncheckedCreateNestedManyWithoutUserInput
    trustLogs?: TrustLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLendingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLendingsInput, UserUncheckedCreateWithoutLendingsInput>
  }

  export type ItemCreateWithoutBorrowRecordsInput = {
    name: string
    description?: string | null
    imageUrl?: ItemCreateimageUrlInput | string[]
    status?: $Enums.ItemStatus
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutItemsInput
    community?: CommunityCreateNestedOneWithoutItemsInput
  }

  export type ItemUncheckedCreateWithoutBorrowRecordsInput = {
    id?: number
    name: string
    description?: string | null
    imageUrl?: ItemCreateimageUrlInput | string[]
    status?: $Enums.ItemStatus
    latitude: number
    longitude: number
    ownerId: string
    communityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutBorrowRecordsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutBorrowRecordsInput, ItemUncheckedCreateWithoutBorrowRecordsInput>
  }

  export type UserUpsertWithoutBorrowingsInput = {
    update: XOR<UserUpdateWithoutBorrowingsInput, UserUncheckedUpdateWithoutBorrowingsInput>
    create: XOR<UserCreateWithoutBorrowingsInput, UserUncheckedCreateWithoutBorrowingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBorrowingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBorrowingsInput, UserUncheckedUpdateWithoutBorrowingsInput>
  }

  export type UserUpdateWithoutBorrowingsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutOwnerNestedInput
    lendings?: BorrowUpdateManyWithoutOwnerNestedInput
    userCommunities?: UserCommunityUpdateManyWithoutUserNestedInput
    trustLogs?: TrustLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBorrowingsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutOwnerNestedInput
    lendings?: BorrowUncheckedUpdateManyWithoutOwnerNestedInput
    userCommunities?: UserCommunityUncheckedUpdateManyWithoutUserNestedInput
    trustLogs?: TrustLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutLendingsInput = {
    update: XOR<UserUpdateWithoutLendingsInput, UserUncheckedUpdateWithoutLendingsInput>
    create: XOR<UserCreateWithoutLendingsInput, UserUncheckedCreateWithoutLendingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLendingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLendingsInput, UserUncheckedUpdateWithoutLendingsInput>
  }

  export type UserUpdateWithoutLendingsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutOwnerNestedInput
    borrowings?: BorrowUpdateManyWithoutBorrowerNestedInput
    userCommunities?: UserCommunityUpdateManyWithoutUserNestedInput
    trustLogs?: TrustLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLendingsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutOwnerNestedInput
    borrowings?: BorrowUncheckedUpdateManyWithoutBorrowerNestedInput
    userCommunities?: UserCommunityUncheckedUpdateManyWithoutUserNestedInput
    trustLogs?: TrustLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ItemUpsertWithoutBorrowRecordsInput = {
    update: XOR<ItemUpdateWithoutBorrowRecordsInput, ItemUncheckedUpdateWithoutBorrowRecordsInput>
    create: XOR<ItemCreateWithoutBorrowRecordsInput, ItemUncheckedCreateWithoutBorrowRecordsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutBorrowRecordsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutBorrowRecordsInput, ItemUncheckedUpdateWithoutBorrowRecordsInput>
  }

  export type ItemUpdateWithoutBorrowRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: ItemUpdateimageUrlInput | string[]
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutItemsNestedInput
    community?: CommunityUpdateOneWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateWithoutBorrowRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: ItemUpdateimageUrlInput | string[]
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTrustLogsInput = {
    uid: string
    name?: string | null
    profilePicture?: string | null
    latitude?: number | null
    longitude?: number | null
    trustScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCreateNestedManyWithoutOwnerInput
    borrowings?: BorrowCreateNestedManyWithoutBorrowerInput
    lendings?: BorrowCreateNestedManyWithoutOwnerInput
    userCommunities?: UserCommunityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTrustLogsInput = {
    uid: string
    name?: string | null
    profilePicture?: string | null
    latitude?: number | null
    longitude?: number | null
    trustScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutOwnerInput
    borrowings?: BorrowUncheckedCreateNestedManyWithoutBorrowerInput
    lendings?: BorrowUncheckedCreateNestedManyWithoutOwnerInput
    userCommunities?: UserCommunityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTrustLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTrustLogsInput, UserUncheckedCreateWithoutTrustLogsInput>
  }

  export type UserUpsertWithoutTrustLogsInput = {
    update: XOR<UserUpdateWithoutTrustLogsInput, UserUncheckedUpdateWithoutTrustLogsInput>
    create: XOR<UserCreateWithoutTrustLogsInput, UserUncheckedCreateWithoutTrustLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTrustLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTrustLogsInput, UserUncheckedUpdateWithoutTrustLogsInput>
  }

  export type UserUpdateWithoutTrustLogsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutOwnerNestedInput
    borrowings?: BorrowUpdateManyWithoutBorrowerNestedInput
    lendings?: BorrowUpdateManyWithoutOwnerNestedInput
    userCommunities?: UserCommunityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTrustLogsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    trustScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutOwnerNestedInput
    borrowings?: BorrowUncheckedUpdateManyWithoutBorrowerNestedInput
    lendings?: BorrowUncheckedUpdateManyWithoutOwnerNestedInput
    userCommunities?: UserCommunityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ItemCreateManyOwnerInput = {
    id?: number
    name: string
    description?: string | null
    imageUrl?: ItemCreateimageUrlInput | string[]
    status?: $Enums.ItemStatus
    latitude: number
    longitude: number
    communityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BorrowCreateManyBorrowerInput = {
    id?: number
    ownerId: string
    itemId: number
    status?: $Enums.BorrowStatus
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    borrowedAt?: Date | string | null
    returnedAt?: Date | string | null
  }

  export type BorrowCreateManyOwnerInput = {
    id?: number
    borrowerId: string
    itemId: number
    status?: $Enums.BorrowStatus
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    borrowedAt?: Date | string | null
    returnedAt?: Date | string | null
  }

  export type UserCommunityCreateManyUserInput = {
    communityId: number
    role?: $Enums.UserRole
  }

  export type TrustLogCreateManyUserInput = {
    id?: number
    scoreChange: number
    reason: string
    createdAt?: Date | string
  }

  export type ItemUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: ItemUpdateimageUrlInput | string[]
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneWithoutItemsNestedInput
    borrowRecords?: BorrowUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: ItemUpdateimageUrlInput | string[]
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowRecords?: BorrowUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: ItemUpdateimageUrlInput | string[]
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowUpdateWithoutBorrowerInput = {
    status?: EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutLendingsNestedInput
    item?: ItemUpdateOneRequiredWithoutBorrowRecordsNestedInput
  }

  export type BorrowUncheckedUpdateWithoutBorrowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    status?: EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowUncheckedUpdateManyWithoutBorrowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    status?: EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowUpdateWithoutOwnerInput = {
    status?: EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrower?: UserUpdateOneRequiredWithoutBorrowingsNestedInput
    item?: ItemUpdateOneRequiredWithoutBorrowRecordsNestedInput
  }

  export type BorrowUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    borrowerId?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    status?: EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    borrowerId?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    status?: EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCommunityUpdateWithoutUserInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    community?: CommunityUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UserCommunityUncheckedUpdateWithoutUserInput = {
    communityId?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserCommunityUncheckedUpdateManyWithoutUserInput = {
    communityId?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type TrustLogUpdateWithoutUserInput = {
    scoreChange?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrustLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    scoreChange?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrustLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    scoreChange?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowCreateManyItemInput = {
    id?: number
    borrowerId: string
    ownerId: string
    status?: $Enums.BorrowStatus
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    borrowedAt?: Date | string | null
    returnedAt?: Date | string | null
  }

  export type BorrowUpdateWithoutItemInput = {
    status?: EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrower?: UserUpdateOneRequiredWithoutBorrowingsNestedInput
    owner?: UserUpdateOneRequiredWithoutLendingsNestedInput
  }

  export type BorrowUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    borrowerId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    borrowerId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumBorrowStatusFieldUpdateOperationsInput | $Enums.BorrowStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemCreateManyCommunityInput = {
    id?: number
    name: string
    description?: string | null
    imageUrl?: ItemCreateimageUrlInput | string[]
    status?: $Enums.ItemStatus
    latitude: number
    longitude: number
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCommunityCreateManyCommunityInput = {
    userId: string
    role?: $Enums.UserRole
  }

  export type ItemUpdateWithoutCommunityInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: ItemUpdateimageUrlInput | string[]
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutItemsNestedInput
    borrowRecords?: BorrowUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: ItemUpdateimageUrlInput | string[]
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowRecords?: BorrowUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: ItemUpdateimageUrlInput | string[]
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCommunityUpdateWithoutCommunityInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    user?: UserUpdateOneRequiredWithoutUserCommunitiesNestedInput
  }

  export type UserCommunityUncheckedUpdateWithoutCommunityInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserCommunityUncheckedUpdateManyWithoutCommunityInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}