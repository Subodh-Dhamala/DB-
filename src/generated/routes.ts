/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../controller/UserController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TicketController } from './../controller/TicketController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TeamController } from './../controller/TeamController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StadiumController } from './../controller/StadiumController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MatchController } from './../controller/MatchController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BookingController } from './../controller/BookingController';
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
    "CreateTicketDto": {
        "dataType": "refObject",
        "properties": {
            "matchId": {"dataType":"double","required":true},
            "seatNumber": {"dataType":"string","required":true},
            "ticketType": {"dataType":"string","required":true},
            "price": {"dataType":"double","required":true},
            "status": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
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
    "CreateMatchDto": {
        "dataType": "refObject",
        "properties": {
            "homeTeamId": {"dataType":"double","required":true},
            "awayTeamId": {"dataType":"double","required":true},
            "stadiumId": {"dataType":"double","required":true},
            "matchDate": {"dataType":"datetime","required":true},
            "stage": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateBookingDto": {
        "dataType": "refObject",
        "properties": {
            "userId": {"dataType":"double","required":true},
            "ticketId": {"dataType":"double","required":true},
            "paymentStatus": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
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
        const argsTicketController_getTickets: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/tickets',
            ...(fetchMiddlewares<RequestHandler>(TicketController)),
            ...(fetchMiddlewares<RequestHandler>(TicketController.prototype.getTickets)),

            async function TicketController_getTickets(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTicketController_getTickets, request, response });

                const controller = new TicketController();

              await templateService.apiHandler({
                methodName: 'getTickets',
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
        const argsTicketController_getTicketById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/tickets/:id',
            ...(fetchMiddlewares<RequestHandler>(TicketController)),
            ...(fetchMiddlewares<RequestHandler>(TicketController.prototype.getTicketById)),

            async function TicketController_getTicketById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTicketController_getTicketById, request, response });

                const controller = new TicketController();

              await templateService.apiHandler({
                methodName: 'getTicketById',
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
        const argsTicketController_createTicket: Record<string, TsoaRoute.ParameterSchema> = {
                ticketData: {"in":"body","name":"ticketData","required":true,"ref":"CreateTicketDto"},
        };
        app.post('/tickets',
            ...(fetchMiddlewares<RequestHandler>(TicketController)),
            ...(fetchMiddlewares<RequestHandler>(TicketController.prototype.createTicket)),

            async function TicketController_createTicket(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTicketController_createTicket, request, response });

                const controller = new TicketController();

              await templateService.apiHandler({
                methodName: 'createTicket',
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
        const argsTicketController_updateTicket: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                ticketData: {"in":"body","name":"ticketData","required":true,"ref":"CreateTicketDto"},
        };
        app.put('/tickets/:id',
            ...(fetchMiddlewares<RequestHandler>(TicketController)),
            ...(fetchMiddlewares<RequestHandler>(TicketController.prototype.updateTicket)),

            async function TicketController_updateTicket(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTicketController_updateTicket, request, response });

                const controller = new TicketController();

              await templateService.apiHandler({
                methodName: 'updateTicket',
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
        const argsTicketController_deleteTicket: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/tickets/:id',
            ...(fetchMiddlewares<RequestHandler>(TicketController)),
            ...(fetchMiddlewares<RequestHandler>(TicketController.prototype.deleteTicket)),

            async function TicketController_deleteTicket(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTicketController_deleteTicket, request, response });

                const controller = new TicketController();

              await templateService.apiHandler({
                methodName: 'deleteTicket',
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
        const argsMatchController_getMatches: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/matches',
            ...(fetchMiddlewares<RequestHandler>(MatchController)),
            ...(fetchMiddlewares<RequestHandler>(MatchController.prototype.getMatches)),

            async function MatchController_getMatches(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMatchController_getMatches, request, response });

                const controller = new MatchController();

              await templateService.apiHandler({
                methodName: 'getMatches',
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
        const argsMatchController_getMatchById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/matches/:id',
            ...(fetchMiddlewares<RequestHandler>(MatchController)),
            ...(fetchMiddlewares<RequestHandler>(MatchController.prototype.getMatchById)),

            async function MatchController_getMatchById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMatchController_getMatchById, request, response });

                const controller = new MatchController();

              await templateService.apiHandler({
                methodName: 'getMatchById',
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
        const argsMatchController_createMatch: Record<string, TsoaRoute.ParameterSchema> = {
                matchData: {"in":"body","name":"matchData","required":true,"ref":"CreateMatchDto"},
        };
        app.post('/matches',
            ...(fetchMiddlewares<RequestHandler>(MatchController)),
            ...(fetchMiddlewares<RequestHandler>(MatchController.prototype.createMatch)),

            async function MatchController_createMatch(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMatchController_createMatch, request, response });

                const controller = new MatchController();

              await templateService.apiHandler({
                methodName: 'createMatch',
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
        const argsMatchController_updateMatch: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                matchData: {"in":"body","name":"matchData","required":true,"ref":"CreateMatchDto"},
        };
        app.put('/matches/:id',
            ...(fetchMiddlewares<RequestHandler>(MatchController)),
            ...(fetchMiddlewares<RequestHandler>(MatchController.prototype.updateMatch)),

            async function MatchController_updateMatch(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMatchController_updateMatch, request, response });

                const controller = new MatchController();

              await templateService.apiHandler({
                methodName: 'updateMatch',
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
        const argsMatchController_deleteMatch: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/matches/:id',
            ...(fetchMiddlewares<RequestHandler>(MatchController)),
            ...(fetchMiddlewares<RequestHandler>(MatchController.prototype.deleteMatch)),

            async function MatchController_deleteMatch(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMatchController_deleteMatch, request, response });

                const controller = new MatchController();

              await templateService.apiHandler({
                methodName: 'deleteMatch',
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
        const argsBookingController_getBookings: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/bookings',
            ...(fetchMiddlewares<RequestHandler>(BookingController)),
            ...(fetchMiddlewares<RequestHandler>(BookingController.prototype.getBookings)),

            async function BookingController_getBookings(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookingController_getBookings, request, response });

                const controller = new BookingController();

              await templateService.apiHandler({
                methodName: 'getBookings',
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
        const argsBookingController_getBookingById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/bookings/:id',
            ...(fetchMiddlewares<RequestHandler>(BookingController)),
            ...(fetchMiddlewares<RequestHandler>(BookingController.prototype.getBookingById)),

            async function BookingController_getBookingById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookingController_getBookingById, request, response });

                const controller = new BookingController();

              await templateService.apiHandler({
                methodName: 'getBookingById',
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
        const argsBookingController_createBooking: Record<string, TsoaRoute.ParameterSchema> = {
                bookingData: {"in":"body","name":"bookingData","required":true,"ref":"CreateBookingDto"},
        };
        app.post('/bookings',
            ...(fetchMiddlewares<RequestHandler>(BookingController)),
            ...(fetchMiddlewares<RequestHandler>(BookingController.prototype.createBooking)),

            async function BookingController_createBooking(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookingController_createBooking, request, response });

                const controller = new BookingController();

              await templateService.apiHandler({
                methodName: 'createBooking',
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
        const argsBookingController_updateBooking: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                bookingData: {"in":"body","name":"bookingData","required":true,"ref":"CreateBookingDto"},
        };
        app.put('/bookings/:id',
            ...(fetchMiddlewares<RequestHandler>(BookingController)),
            ...(fetchMiddlewares<RequestHandler>(BookingController.prototype.updateBooking)),

            async function BookingController_updateBooking(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookingController_updateBooking, request, response });

                const controller = new BookingController();

              await templateService.apiHandler({
                methodName: 'updateBooking',
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
        const argsBookingController_deleteBooking: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/bookings/:id',
            ...(fetchMiddlewares<RequestHandler>(BookingController)),
            ...(fetchMiddlewares<RequestHandler>(BookingController.prototype.deleteBooking)),

            async function BookingController_deleteBooking(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsBookingController_deleteBooking, request, response });

                const controller = new BookingController();

              await templateService.apiHandler({
                methodName: 'deleteBooking',
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
