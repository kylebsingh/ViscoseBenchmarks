declare global {
	interface PlayerProfile {
		playerId: string;
		steamAccountAvatar?: string;
		steamAccountName?: string;
		webapp?: {
			username: string;
		};
	}

	interface ScoreData {
		score: string | number;
		[key: string]: any;
	}

	interface ElectronAPI {
		getProfile(username: string): Promise<{ success: boolean; data: PlayerProfile }>;
		getScenarioScore(username: string, scenarioName: string): Promise<{ success: boolean; data: ScoreData | any[] }>;
		getRecentActivity(username: string): Promise<{ success: boolean; data: any }>;
	}

	interface Window {
		electronAPI: ElectronAPI;
	}

	namespace App {}
}

export {};
