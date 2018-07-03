declare module "pako/lib/deflate" {
	export interface DeflateOptions {
		level?: number;
		windowBits?: number;
		memLevel?: number;
		strategy?: number;
		dictionary?: any;
		raw?: boolean;
		to?: 'string';
	}

	export type Data = Uint8Array | Array<number> | string;

	/**
	 * Compress data with deflate algorithm and options.
	 */
	export function deflate( data: Data, options: DeflateOptions & {to: 'string'} ): string;
	export function deflate( data: Data, options?: DeflateOptions ): Uint8Array;

	/**
	 * The same as deflate, but creates raw data, without wrapper (header and adler32 crc).
	 */
	export function deflateRaw( data: Data, options: DeflateOptions & {to: 'string'} ): string;
	export function deflateRaw( data: Data, options?: DeflateOptions ): Uint8Array;

	/**
	 * The same as deflate, but create gzip wrapper instead of deflate one.
	 */
	export function gzip( data: Data, options: DeflateOptions & {to: 'string'} ): string;
	export function gzip( data: Data, options?: DeflateOptions ): Uint8Array;

	export class Deflate {
		constructor( options?: DeflateOptions );
		err: number;
		msg: string;
		result: Uint8Array | Array<number>;
		onData( chunk: Data ): void;
		onEnd( status: number ): void;
		push( data: Data | ArrayBuffer, mode?: number | boolean ): boolean;
	}
}
