import { OCPP16AvailabilityType, OCPP16BootNotificationRequest, OCPP16IncomingRequestCommand, OCPP16RequestCommand } from './1.6/Requests';

import { MessageType } from './MessageType';
import { OCPP16DiagnosticsStatus } from './1.6/DiagnosticsStatus';
import OCPPError from '../../exception/OCPPError';

export type IncomingRequestHandler = (commandPayload: Record<string, unknown>) => Record<string, unknown> | Promise<Record<string, unknown>>;

export type BootNotificationRequest = OCPP16BootNotificationRequest;

export type AvailabilityType = OCPP16AvailabilityType;

export const AvailabilityType = {
  ...OCPP16AvailabilityType
};

export type RequestCommand = OCPP16RequestCommand;

export const RequestCommand = {
  ...OCPP16RequestCommand
};

export type IncomingRequestCommand = OCPP16IncomingRequestCommand;

export const IncomingRequestCommand = {
  ...OCPP16IncomingRequestCommand
};

export type DiagnosticsStatus = OCPP16DiagnosticsStatus;

export const DiagnosticsStatus = {
  ...OCPP16DiagnosticsStatus
};

export type Request = [MessageType, string, RequestCommand, Record<string, unknown>, Record<string, unknown>];

export type IncomingRequest = [MessageType, string, IncomingRequestCommand, Record<string, unknown>, Record<string, unknown>];

export type CachedRequest = [(payload: Record<string, unknown> | string, requestPayload: Record<string, unknown>) => void, (error: OCPPError, requestStatistic?: boolean) => void, RequestCommand | IncomingRequestCommand, Record<string, unknown>];
