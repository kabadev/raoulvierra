import { NextResponse } from "next/server";
import { connect } from "../../../../config/dbConfig";
import AnsysCategory from "../../../../models/AnsysCategory";

export async function POST(res) {
	await connect();
	try {
		const request = await res.json();
		const newCat = new AnsysCategory({
			title: request.title,
		});
		const saveCat = await newCat.save();
		return NextResponse.status(200).json(saveCat);
	} catch (err) {
		return NextResponse.status(500).json({ err: "Failed to post" });
	}
}
export async function GET(res) {
	await connect();
	try {
		const post = await AnsysCategory.find();
		return NextResponse.json(post);
	} catch (err) {
		return NextResponse.json(err);
	}
}
