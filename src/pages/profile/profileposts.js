import Icon from "../../components/Icon";

export default function ProfilePosts() {
    return (
        <div className="flex justify-center items-center flex-col gap-4 pt-10">
            <div className="w-[62px] h-[62px] rounded-full flex justify-center items-center border-2 border-black">
                <Icon name="post" size={30}/>
            </div>
            <h6 className="text-[28px] font-light">No Posts Yet</h6>
        </div>
    )
}