import { useState } from "react";
import { toast } from "react-toastify";

type CopiedValue = string | null;
type CopyFn = {
	(
		text: string,
		name?: string,
		options?: { showNotification?: boolean }
	): Promise<boolean>;
}; // Return success

function useCopyToClipboard() {
	const [copiedText, setCopiedText] = useState<CopiedValue>(null);

	const copy: CopyFn = async (text, name, options) => {
		if (!navigator?.clipboard) {
			console.warn("Clipboard not supported");
			return false;
		}

		// Try to save to clipboard then save it in the state if worked
		try {
			await navigator.clipboard.writeText(text);
			setCopiedText(text);
			options?.showNotification &&
				toast.success(`${name} copied to clipboard!`);
			return true;
		} catch (error) {
			console.warn("Copy failed", error);
			setCopiedText(null);
			return false;
		}
	};

	return { copiedText, copy };
}

export default useCopyToClipboard;
