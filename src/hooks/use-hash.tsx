"use client";

import React, { useEffect, useState } from "react";

export const useHash = () => {
	const _window = typeof window !== "undefined" ? window : null;

	const [hash, setHash] = useState(_window?.location?.hash);

	useEffect(() => {
		const onHashChanged = () => setHash(_window?.location?.hash!);

		const { pushState, replaceState } = _window?.history!;

		// @ts-ignore
		_window.history.pushState = function (...args) {
			pushState.apply(_window?.history, args);
			setTimeout(() => setHash(_window?.location.hash!));
		};
		// @ts-ignore
		_window.history.replaceState = function (...args) {
			replaceState.apply(_window?.history, args);
			setTimeout(() => setHash(_window?.location.hash!));
		};
		// @ts-ignore
		_window.addEventListener("hashchange", onHashChanged);
		return () => {
			_window?.removeEventListener("hashchange", onHashChanged);
		};
	}, []);
	return hash;
};
