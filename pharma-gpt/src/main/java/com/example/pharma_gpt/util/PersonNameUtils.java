package com.example.pharma_gpt.util;

import java.util.Arrays;
import java.util.Locale;
import java.util.stream.Collectors;

public final class PersonNameUtils {

    private static final Locale RO = Locale.forLanguageTag("ro-RO");

    private PersonNameUtils() {
    }

    /** Prenume / nume: fiecare cuvânt (și după „-”) cu inițială mare. */
    public static String formatPersonName(String raw) {
        if (raw == null) {
            return null;
        }
        String t = raw.trim();
        if (t.isEmpty()) {
            return t;
        }
        return Arrays.stream(t.split("\\s+"))
            .filter(w -> !w.isEmpty())
            .map(PersonNameUtils::formatWordWithHyphens)
            .collect(Collectors.joining(" "));
    }

    private static String formatWordWithHyphens(String word) {
        return Arrays.stream(word.split("-"))
            .filter(s -> !s.isEmpty())
            .map(PersonNameUtils::capitalizeSegment)
            .collect(Collectors.joining("-"));
    }

    private static String capitalizeSegment(String s) {
        String lower = s.toLowerCase(RO);
        if (lower.isEmpty()) {
            return s;
        }
        return Character.toUpperCase(lower.charAt(0)) + lower.substring(1);
    }
}
