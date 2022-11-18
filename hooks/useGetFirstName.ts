export default function useGetFirstName() {
	function getFirstName(displayName: string): string {
		if (displayName) return displayName.split(' ')[0]

		return 'Your'
	}

	return { getFirstName }
}
