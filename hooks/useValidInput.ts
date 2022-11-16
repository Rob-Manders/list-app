export default function useValidInput() {
	function validInput(input): boolean {
		if (input.length >= 3 && input.length <= 24) return true

		return false
	}

	return { validInput }
}
