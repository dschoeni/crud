import { BaseRoute, CrudOptions, MergedCrudOptions } from '../interfaces';
import { BaseRouteName } from '../types';
import { CrudActions } from '../enums';
export declare class CrudRoutesFactory {
    protected target: any;
    protected options: MergedCrudOptions;
    protected swaggerModels: any;
    constructor(target: any, options: CrudOptions);
    static create(target: any, options: CrudOptions): CrudRoutesFactory;
    protected readonly targetProto: any;
    protected readonly modelName: string;
    protected readonly modelType: any;
    protected readonly actionsMap: {
        [key in BaseRouteName]: CrudActions;
    };
    protected create(): void;
    protected mergeOptions(): void;
    protected getRoutesSchema(): BaseRoute[];
    protected getManyBase(name: BaseRouteName): void;
    protected getOneBase(name: BaseRouteName): void;
    protected createOneBase(name: BaseRouteName): void;
    protected createManyBase(name: BaseRouteName): void;
    protected updateOneBase(name: BaseRouteName): void;
    protected replaceOneBase(name: BaseRouteName): void;
    protected deleteOneBase(name: BaseRouteName): void;
    protected recoverOneBase(name: BaseRouteName): void;
    protected canCreateRoute(name: BaseRouteName): boolean;
    protected setResponseModels(): void;
    protected createRoutes(routesSchema: BaseRoute[]): void;
    protected overrideRoutes(routesSchema: BaseRoute[]): void;
    protected enableRoutes(routesSchema: BaseRoute[]): void;
    protected overrideParsedBodyDecorator(override: BaseRouteName, name: string): void;
    protected getPrimaryParams(): string[];
    protected setBaseRouteMeta(name: BaseRouteName): void;
    protected setRouteArgs(name: BaseRouteName): void;
    protected setRouteArgsTypes(name: BaseRouteName): void;
    protected setInterceptors(name: BaseRouteName): void;
    protected setDecorators(name: BaseRouteName): void;
    protected setAction(name: BaseRouteName): void;
    protected setSwaggerOperation(name: BaseRouteName): void;
    protected setSwaggerPathParams(name: BaseRouteName): void;
    protected setSwaggerQueryParams(name: BaseRouteName): void;
    protected setSwaggerResponseOk(name: BaseRouteName): void;
    protected routeNameAction(name: BaseRouteName): string;
}
