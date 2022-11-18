export default function useValidInput() {
	const MIN_LENGTH: number = 1
	const MAX_LENGTH: number = 24

	function validInput(input: string): boolean {
		if (input.length >= MIN_LENGTH && input.length <= MAX_LENGTH) return true

		return false
	}

	return { validInput }
}
