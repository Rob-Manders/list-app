export default function useValidInput() {
	const MIN_LENGTH = 2
	const MAX_LENGTH = 24

	function validInput(input): boolean {
		if (input.length >= MIN_LENGTH && input.length <= MAX_LENGTH) return true

		return false
	}

	return { validInput }
}
