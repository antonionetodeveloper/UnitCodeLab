export interface CommentType {
	content: string
	author: string
	id: string
	_id?: string
	updatedAt: string
	children: Array<object>
	reference?: string
}
