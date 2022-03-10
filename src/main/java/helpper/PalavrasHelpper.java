package helpper;

import java.util.Arrays;
import java.util.HashMap;

import org.json.JSONObject;

import dto.PalavraDto;

public class PalavrasHelpper {

	public static String getPalavras(PalavraDto palavraDto) {
		
		String[] palavras = getArrayPalavras(palavraDto);
		
		JSONObject response = new JSONObject();
		HashMap<String, Integer> palavrasMap = new HashMap<String, Integer>();		

		buildPalavrasMap(palavras, palavrasMap);

		response.put("quantidade", palavrasMap.size());
		response.put("palavras", palavrasMap);

		return response.toString();

	}

	private static void buildPalavrasMap(String[] palavras, HashMap<String, Integer> palavrasMap) {
		Arrays.sort(palavras);
		for (String key : palavras) {
			//TODO: poderia criar uma série de validação de REGEX
			if (key.matches("[0-9]*")) { 
				continue;
			}

			if (palavrasMap.get(key) != null) {
				palavrasMap.put(key, palavrasMap.get(key) + 1);
			} else {
				palavrasMap.put(key, 1);
			}
		}
	}

	private static String[] getArrayPalavras(PalavraDto palavraDto) {
		String[] palavras;
		if(palavraDto.isValidCase()) {
			palavras = palavraDto.getText().replaceAll("\n", " ").replaceAll("\\p{Punct}", "").split(" ");
		} else {
			palavras = palavraDto.getText().replaceAll("\n", " ").replaceAll("\\p{Punct}", "").toUpperCase().split(" ");
		}
		return palavras;
	}

}
