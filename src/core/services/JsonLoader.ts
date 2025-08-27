/**
 * Loads JSON data from a specific file path.
 * This function handles fetching the file, checking the HTTP response,
 * and parsing the JSON data.
 *
 * @param filePath The path to the JSON file
 * @returns Promise<T | []> The parsed JSON data of type T,
 * or an empty array if an error occurs during fetching or parsing.
 */
export async function loadJsonFile<T>(filePath: string): Promise<T | null> {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status} while fetching ${filePath}`);
            throw new Error(`Failed to fetch JSON from ${filePath}. Status: ${response.status}`);
        }
        const data = await response.json();
        return data as T;
    } catch (error) {
        console.error(`Error fetching data from JSON file (${filePath}):`, error);
        return null;
    }
}
