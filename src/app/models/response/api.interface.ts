export interface Info {
	count: number;
	pages: number;
	next: string;
	prev?: any;
}

export interface ResponseApi {
	info: Info;
	results: any[];
}
