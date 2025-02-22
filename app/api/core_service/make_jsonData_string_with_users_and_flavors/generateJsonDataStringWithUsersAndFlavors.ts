//app/api/core_service/make_jsonData_string_with_users_and_flavors

import {
  getAllUsers,
  getWhitelist,
  getBlacklist,
  getCustomInstructions,
} from "../../../db";

import { fetchInstagramData } from "../../instagram/get_instagram_data";
import { extractFlavors } from "../ai_todays_flavor/extract_flavors";
import { ParsedData } from "../../../../types/ParsedData";

export async function generateJsonDataStringWithUsersAndFlavors() {
  try {
    // Fetch Instagram data
    let parsed_data: ParsedData = await fetchInstagramData();

    // Extract flavors directly using the function
    let tonightsFlavors = await extractFlavors(parsed_data.data.items);

    // Fetch all users from the database
    let users = await getAllUsers();

    let jsonData = {
      tonightsFlavors,
      users: await Promise.all(
        users.map(async (user) => ({
          id: user.id.toString(),
          whitelist: await getWhitelist(user.email ?? ""),
          blacklist: await getBlacklist(user.email ?? ""),
          customInstructions: await getCustomInstructions(user.email ?? ""),
        }))
      ),
    };

    // Use JSON.stringify with spacing for more detailed logging
    console.log(
      "Final JSON data for processing:",
      JSON.stringify(jsonData, null, 2)
    );

    return jsonData;
  } catch (error) {
    console.error("Error in generateJsonDataStringWithUsersAndFlavors:", error);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
}
