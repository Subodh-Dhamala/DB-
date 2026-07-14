/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../controller/UserController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TeamController } from './../controller/TeamController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StadiumController } from './../controller/StadiumController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "User": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "fullName": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "phone": {"dataType":"string","required":true},
            "country": {"dataType":"string","required":true},
            "CreatedAt": {"dataType":"datetime","required":true},
            "bookings": {"dataType":"array","array":{"dataType":"refObject","ref":"Booking"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Match": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "matchDate": {"dataType":"datetime","required":true},
            "stage": {"dataType":"string","required":true},
            "stadium": {"ref":"Stadium","required":true},
            "tickets": {"dataType":"array","array":{"dataType":"refObject","ref":"Ticket"},"required":true},
            "homeTeam": {"ref":"Team","required":true},
            "awayTeam": {"ref":"Team","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Stadium": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "stadiumName": {"dataType":"string","required":true},
            "city": {"dataType":"string","required":true},
            "country": {"dataType":"string","required":true},
            "capacity": {"dataType":"double","required":true},
            "matches": {"dataType":"array","array":{"dataType":"refObject","ref":"Match"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Ticket": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "seatNumber": {"dataType":"string","required":true},
            "ticketType": {"dataType":"string","required":true},
            "price": {"dataType":"double","required":true},
            "status": {"dataType":"string","required":true},
            "match": {"ref":"Match","required":true},
            "booking": {"ref":"Booking","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Team": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "teamName": {"dataType":"string","required":true},
            "country": {"dataType":"string","required":true},
            "coach": {"dataType":"string","required":true},
            "fifaRank": {"dataType":"double","required":true},
            "homeMatches": {"dataType":"array","array":{"dataType":"refObject","ref":"Match"},"required":true},
            "awayMatches": {"dataType":"array","array":{"dataType":"refObject","ref":"Match"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Booking": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "paymentStatus": {"dataType":"string","required":true},
            "bookingDate": {"dataType":"datetime","required":true},
            "user": {"ref":"User","required":true},
            "ticket": {"ref":"Ticket","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_User_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"double"},"fullName":{"dataType":"string"},"email":{"dataType":"string"},"phone":{"dataType":"string"},"country":{"dataType":"string"},"CreatedAt":{"dataType":"datetime"},"bookings":{"dataType":"array","array":{"dataType":"refObject","ref":"Booking"}}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Team_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"double"},"teamName":{"dataType":"string"},"country":{"dataType":"string"},"coach":{"dataType":"string"},"fifaRank":{"dataType":"double"},"homeMatches":{"dataType":"array","array":{"dataType":"refObject","ref":"Match"}},"awayMatches":{"dataType":"array","array":{"dataType":"refObject","ref":"Match"}}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Stadium_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"double"},"stadiumName":{"dataType":"string"},"city":{"dataType":"string"},"country":{"dataType":"string"},"capacity":{"dataType":"double"},"matches":{"dataType":"array","array":{"dataType":"refObject","ref":"Match"}}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"ignore","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsUserController_getUsers: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/users',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.getUsers)),

            async function UserController_getUsers(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_getUsers, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'getUsers',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_getUserById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.getUserById)),

            async function UserController_getUserById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_getUserById, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'getUserById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_createUser: Record<string, TsoaRoute.ParameterSchema> = {
                userData: {"in":"body","name":"userData","required":true,"ref":"Partial_User_"},
        };
        app.post('/users',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.createUser)),

            async function UserController_createUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_createUser, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'createUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_updateUser: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                userData: {"in":"body","name":"userData","required":true,"ref":"Partial_User_"},
        };
        app.put('/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.updateUser)),

            async function UserController_updateUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_updateUser, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'updateUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_deleteUser: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.deleteUser)),

            async function UserController_deleteUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_deleteUser, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'deleteUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTeamController_getTeams: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/teams',
            ...(fetchMiddlewares<RequestHandler>(TeamController)),
            ...(fetchMiddlewares<RequestHandler>(TeamController.prototype.getTeams)),

            async function TeamController_getTeams(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTeamController_getTeams, request, response });

                const controller = new TeamController();

              await templateService.apiHandler({
                methodName: 'getTeams',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTeamController_getTeamById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/teams/:id',
            ...(fetchMiddlewares<RequestHandler>(TeamController)),
            ...(fetchMiddlewares<RequestHandler>(TeamController.prototype.getTeamById)),

            async function TeamController_getTeamById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTeamController_getTeamById, request, response });

                const controller = new TeamController();

              await templateService.apiHandler({
                methodName: 'getTeamById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTeamController_createTeam: Record<string, TsoaRoute.ParameterSchema> = {
                teamData: {"in":"body","name":"teamData","required":true,"ref":"Partial_Team_"},
        };
        app.post('/teams',
            ...(fetchMiddlewares<RequestHandler>(TeamController)),
            ...(fetchMiddlewares<RequestHandler>(TeamController.prototype.createTeam)),

            async function TeamController_createTeam(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTeamController_createTeam, request, response });

                const controller = new TeamController();

              await templateService.apiHandler({
                methodName: 'createTeam',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTeamController_updateTeam: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                teamData: {"in":"body","name":"teamData","required":true,"ref":"Partial_Team_"},
        };
        app.put('/teams/:id',
            ...(fetchMiddlewares<RequestHandler>(TeamController)),
            ...(fetchMiddlewares<RequestHandler>(TeamController.prototype.updateTeam)),

            async function TeamController_updateTeam(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTeamController_updateTeam, request, response });

                const controller = new TeamController();

              await templateService.apiHandler({
                methodName: 'updateTeam',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTeamController_deleteTeam: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/teams/:id',
            ...(fetchMiddlewares<RequestHandler>(TeamController)),
            ...(fetchMiddlewares<RequestHandler>(TeamController.prototype.deleteTeam)),

            async function TeamController_deleteTeam(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTeamController_deleteTeam, request, response });

                const controller = new TeamController();

              await templateService.apiHandler({
                methodName: 'deleteTeam',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStadiumController_getStadiums: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/stadiums',
            ...(fetchMiddlewares<RequestHandler>(StadiumController)),
            ...(fetchMiddlewares<RequestHandler>(StadiumController.prototype.getStadiums)),

            async function StadiumController_getStadiums(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStadiumController_getStadiums, request, response });

                const controller = new StadiumController();

              await templateService.apiHandler({
                methodName: 'getStadiums',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStadiumController_getStadiumById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/stadiums/:id',
            ...(fetchMiddlewares<RequestHandler>(StadiumController)),
            ...(fetchMiddlewares<RequestHandler>(StadiumController.prototype.getStadiumById)),

            async function StadiumController_getStadiumById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStadiumController_getStadiumById, request, response });

                const controller = new StadiumController();

              await templateService.apiHandler({
                methodName: 'getStadiumById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStadiumController_createStadium: Record<string, TsoaRoute.ParameterSchema> = {
                stadiumData: {"in":"body","name":"stadiumData","required":true,"ref":"Partial_Stadium_"},
        };
        app.post('/stadiums',
            ...(fetchMiddlewares<RequestHandler>(StadiumController)),
            ...(fetchMiddlewares<RequestHandler>(StadiumController.prototype.createStadium)),

            async function StadiumController_createStadium(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStadiumController_createStadium, request, response });

                const controller = new StadiumController();

              await templateService.apiHandler({
                methodName: 'createStadium',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStadiumController_updateStadium: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                stadiumData: {"in":"body","name":"stadiumData","required":true,"ref":"Partial_Stadium_"},
        };
        app.put('/stadiums/:id',
            ...(fetchMiddlewares<RequestHandler>(StadiumController)),
            ...(fetchMiddlewares<RequestHandler>(StadiumController.prototype.updateStadium)),

            async function StadiumController_updateStadium(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStadiumController_updateStadium, request, response });

                const controller = new StadiumController();

              await templateService.apiHandler({
                methodName: 'updateStadium',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStadiumController_deleteStadium: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/stadiums/:id',
            ...(fetchMiddlewares<RequestHandler>(StadiumController)),
            ...(fetchMiddlewares<RequestHandler>(StadiumController.prototype.deleteStadium)),

            async function StadiumController_deleteStadium(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStadiumController_deleteStadium, request, response });

                const controller = new StadiumController();

              await templateService.apiHandler({
                methodName: 'deleteStadium',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
